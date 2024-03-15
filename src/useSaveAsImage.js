import FileSaver, { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { useCallback } from "react";

export function useSaveAsImage(id, chartRef) {
  const handleDivDownload = useCallback(
    async (format = "svg", name = "rechart") => {
      if (format === "svg") {
        exportChartAsSvgOrHtml(true, name);
      } else if (format === "html") {
        exportChartAsSvgOrHtml(false, name);
      } else if (format === "jpeg") {
        saveChartAsJpegOrPng(true, name);
      } else if (format === "png") {
        saveChartAsJpegOrPng(false, name);
      }
    },
    []
  );

  function saveChartAsJpegOrPng(isJpge, name) {
    let fileName = `${name}.${isJpge ? "jpeg" : "png"}`;
    console.log(chartRef.current);
    html2canvas(chartRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, fileName);
      });
    });
  }

  function exportChartAsSvgOrHtml(asSVG = true, name) {
    let currRef = document.getElementById(id);
    if (asSVG) {
      let svgURL = new XMLSerializer().serializeToString(currRef);
      let svgBlob = new Blob([svgURL], { type: "image/svg+xml;charset=utf-8" });
      FileSaver.saveAs(svgBlob, name + ".svg");
    } else {
      let svgBlob = new Blob([currRef.outerHTML], {
        type: "text/html;charset=utf-8",
      });
      FileSaver.saveAs(svgBlob, name + ".html");
    }
  }

  return {
    handleDivDownload,
  };
}
