/// #if DEVELOPMENT
import { Pane } from "tweakpane"
import { Download, Import } from "./Files";

export function CreatePane(title, expanded = false) {
  return new Pane({
    title: title,
    container: document.querySelector(".tweakpane-container"),
    expanded: expanded,
  })
}

export function Presetpane(tgt, name) {
  tgt.addSeparator();
  tgt.addSeparator();

  const btn = tgt.addButton({ title: 'EXPORT' });
  btn.on("click", () => {
    const preset = tgt.exportPreset();
    Download(JSON.stringify(preset, null, 2), name + ".json", "text/plain")
  });

  const btn1 = tgt.addButton({ title: 'IMPORT' });
  btn1.on("click", () => {
    Import().then((value) => {
      tgt.importPreset(value);
    });
  });

}
/// #endif
