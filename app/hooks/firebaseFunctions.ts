import {
  getMetadata,
  getStorage,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebase";
import toast from "react-hot-toast";

type ItemDataType = {
  name: string;
  downloadLink: string;
  metadata: any;
};

export async function handleResourceUpload(file: File, id: string) {
  // ||||||||||||||||||||||||||||||||||||||||||||||||||

  try {
    if (file) {
      const fileName = new Date().getTime() + file.name;

      const storage = getStorage(app);
      const storageRef = ref(storage, `${id}/${fileName}`);

      const metaData = {
        contentType: file.type,
        customMetadata: {
          displayFileName: file.name,
        },
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metaData);

      const toastId = toast.loading("Uploading Project Resource...");

      await uploadTask.on(
        "state_changed",
        (snapshot) => {
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              console.log("default");
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error.message);
          toast.error("Oops! Project Resource Can't Be Uploaded", {
            id: toastId,
          });
        },
        () => {
          // Handle successful uploads on complete
          toast.success("Project Resource Uploaded", {
            id: toastId,
          });
        }
      );
    }
  } catch (error) {
    console.log(error);
    toast.error("Oops! Something went wrong :/");
  }

  // ||||||||||||||||||||||||||||||||||||||||||||||||||
}

export async function handleResourcesFetch(id: string) {
  try {
    const storage = getStorage();

    // Create a reference under which you want to list
    // const listRef = ref(storage, `${id}/`);
    const listRef = ref(storage, `${id}/`);

    // Find all the prefixes and items.
    const data = await listAll(listRef)
      .then(async (res) => {
        const resources = res.items.map(async (item) => {
          try {
            const metadata = await getMetadata(item);

            return {
              name: item.name,
              downloadLink: `https://firebasestorage.googleapis.com/v0/b/technical-era1-dev.appspot.com/o/${item.fullPath.replace(
                "/",
                "%2F"
              )}`,
              metadata: metadata.customMetadata,
            };
          } catch (error) {
            console.error("Firebase fetch resource error:\n", error);

            return {
              name: item.name,
              downloadLink: `https://firebasestorage.googleapis.com/v0/b/technical-era1-dev.appspot.com/o/${item.fullPath.replace(
                "/",
                "%2F"
              )}`,
              metadata: { displayFileName: item.name },
            };
          }
        });

        const resourcesArray = await Promise.all(resources);
        return resourcesArray;
      })
      .then((res) => {
        async function resourceUrl(url: string) {
          const response = await fetch(url);
          const data = await response.json();
          const downloadTokens = data.downloadTokens;

          const resourceUrl = `${url}?alt=media&token=${downloadTokens}`;

          return resourceUrl;
        }

        return res.map(async (data) => {
          const newResourceUrl = await resourceUrl(data.downloadLink);
          return { ...data, downloadLink: newResourceUrl };
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });

    return data;
  } catch (error) {
    console.log(error);
  }
}
