import { handleResourceUpload } from "@/app/hooks/firebaseFunctions";

function EditCard({ title, id }: { title: string; id: string }) {
  return (
    <div className="group col-span-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border border-dark/10 rounded-md shadow-2xl shadow-dark/10 hover:shadow-dark/70 hover:border-dark/20 px-4  py-2 transition-all duration-300 ease-linear">
      <h2 className="py-1 font-semibold text-sm text-dark/50 cursor-default first-letter:uppercase group-hover:text-dark/80">
        {title.trim()}
      </h2>

      <div className="flex justify-between items-center gap-4">
        <input
          type="file"
          name="image"
          accept="*"
          id="image"
          // className="hidden"
          className="text-xs text-dark/50 file:border file:border-dark/20 file:bg-white file:text-dark file:px-4 file:py-2 file:rounded-md file:text-xs hover:file:text-primary/70 hover:file:border-primary/20 file:transition-[border,color] file:duration-300 file:ease-in-out file:cursor-pointer"
          onChange={(e) => {
            if (e.target.files) {
              handleResourceUpload(e.target.files[0], id);
            }
          }}
        />
      </div>
    </div>
  );
}

export default EditCard;
