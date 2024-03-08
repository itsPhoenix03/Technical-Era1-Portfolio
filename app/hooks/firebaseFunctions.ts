import {
  getStorage,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebase";
import toast from "react-hot-toast";

export async function handleImageUpload(file: File, id: string) {
  // ||||||||||||||||||||||||||||||||||||||||||||||||||

  try {
    if (file) {
      const fileName = new Date().getTime() + file.name;

      const storage = getStorage(app);
      const storageRef = ref(storage, `${id}/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      const toastId = toast.loading("Uploading Project Resource Image...");

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
          toast.error("Oops! Project Resource Image Can't Be Uploaded", {
            id: toastId,
          });
        },
        () => {
          // Handle successful uploads on complete
          toast.success("Project Resource Image Uploaded", {
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

export async function handleImagesFetch(id: string) {
  try {
    const storage = getStorage();

    // Create a reference under which you want to list
    // const listRef = ref(storage, `${id}/`);
    const listRef = ref(storage, `${id}/`);

    // Find all the prefixes and items.
    const data = await listAll(listRef)
      .then((res) => {
        return res.items.reduce((acc: string[], curr) => {
          if (curr.fullPath)
            acc.push(
              `https://firebasestorage.googleapis.com/v0/b/technical-era1-dev.appspot.com/o/${curr.fullPath.replace(
                "/",
                "%2F"
              )}`
            );
          return acc;
        }, []);
      })
      .then((res) => {
        async function imageUrl(url: string) {
          const response = await fetch(url);
          const data = await response.json();
          const downloadTokens = data.downloadTokens;

          const imageUrl = `${url}?alt=media&token=${downloadTokens}`;

          return imageUrl;
        }

        return res.map(async (url) => {
          const newImageUrl = await imageUrl(url);
          return newImageUrl;
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
