import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const SelectImage = forwardRef(function SelectImage({ onSubmit }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal rounded-md bg-zinc-300 p-6">
      <form method="dialog" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <div className="py-2 px-4">
            <label>FILE NAME:</label>
            <input
              className="ms-2 rounded "
              htmlFor="name"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="py-2 px-4">
            <label htmlFor="imageOps">CHOOSE A FORMAT:</label>
            <select className="ms-2 rounded" name="imageOps" id="imageOps">
              <option value="jpeg">JPEG</option>
              <option value="png">PNG</option>
              <option value="svg">SVG</option>
              <option value="html">HTML</option>
            </select>
          </div>
        </div>
        <div className="py-2 px-4">
          <button
            className=" bg-sky-600 text-white p-1 rounded"
            type="button"
            onClick={() => {
              dialog.current.close();
            }}
          >
            CANCEL
          </button>
          <button className="float-right bg-sky-600 text-white p-1 rounded px-2">
            SAVE
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export function submitForm(event) {
  let format = event.target.imageOps.value;
  let name = event.target.name.value;
  event.target.reset();
  return { format, name };
}

export default SelectImage;
