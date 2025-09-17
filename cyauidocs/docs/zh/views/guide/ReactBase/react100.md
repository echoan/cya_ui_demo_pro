<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-17 16:11:38
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-17 16:31:54
-->

### 一个通过文件流和 url 两种方式下载 pdf/word(docx)/excel(xlsx)文件的实例

```jsx
/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-15 13:40:26
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-17 15:33:02
 */
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
function App() {
  // 模拟下载 Excel 文件
  const mockDownloadExcel = () => {
    // 1. 准备数据：二维数组（可以是任意数据）
    const data = [
      ["姓名", "年龄"],
      ["张三", 25],
      ["李四", 30],
    ];
    // 2. 创建一个工作表
    const ws = XLSX.utils.aoa_to_sheet(data); // aoa: array of arrays

    // 3. 创建一个工作簿
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // 4. 生成二进制 Excel 数据
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    // 5. 转换为 Blob 对象
    //const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // 6. 使用 FileSaver.js 保存文件
    saveAs(blob, "模拟下载.xlsx");
    alert("结束"); // 弹窗提示
  };
  // 模拟下载 word
  const generateDocx = async () => {
    // 1. 创建一个文档对象
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "hello world",
                  bold: true,
                  size: 28, // 字号
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun("第二行文字，正常字体"),
                new TextRun({ text: "（加粗文字）", bold: true }),
              ],
            }),
          ],
        },
      ],
    });
    // 2. 生成 Word 文件的二进制数据
    const buffer = await Packer.toBlob(doc);

    // 3. 触发下载
    saveAs(buffer, "示例文档.docx");
  };
  //文件流模拟下载 pdf
  const generatePdf = async () => {
    // 1. 创建一个新的 PDF 文档
    const pdfDoc = await PDFDocument.create();
    // 2. 添加一页
    const page = pdfDoc.addPage([595, 842]); // A4 大小
    // 3. 加载字体
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    // 4. 在页面上写字
    const text = "hello world";
    page.drawText(text, {
      x: 50,
      y: 800,
      size: 18,
      font,
      color: rgb(0, 0.53, 0.71),
    });
    // 5. 生成 PDF 二进制数据
    const pdfBytes = await pdfDoc.save();
    // 6. 转成 Blob 并下载
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "示例PDF.pdf"); // 以数据流的形式下载
  };

  //通过 url 地址 直接下载 excel
  const generateExcel_1 = async () => {
    // let excelUrl = "https://go.microsoft.com/fwlink/?LinkID=521962";
    let excelUrl = "http://152.136.20.207/cyaui/test.xlsx";
    //使用 a 标签下载 以链接配合url的形式下载
    const link = document.createElement("a");
    link.href = excelUrl;
    link.download = "示例excel"; // 设置下载文件名
    link.click(); // 模拟点击
    URL.revokeObjectURL(excelUrl); // 释放临时 URL
    //window.location.href = excelUrl;
  };
  //通过url 地址 直接下载 word
  const generateWord_1 = async () => {
    // let wordUrl = "https://wjw.sz.gov.cn/attachment/0/591/591086/3159181.docx";
    let wordUrl = "http://152.136.20.207/cyaui/test.docx";
    //使用 a 标签下载 以链接配合url的形式下载
    const link = document.createElement("a");
    link.href = wordUrl;
    link.download = "示例word"; // 设置下载文件名
    link.click(); // 模拟点击
    URL.revokeObjectURL(wordUrl); // 释放临时 URL
    //window.location.href = wordUrl;
  };
  //通过 url 地址直接下载 pdf
  const generatePdf_1 = async () => {
    // let pdfUrl =
    //   "https://www.uscis.gov/sites/default/files/document/guides/M-618_c.pdf?utm_source=chatgpt.com";
    let pdfUrl = "http://152.136.20.207/cyaui/test.pdf";
    //使用 a 标签下载 以链接配合url的形式下载
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "示例pdf"; // 设置下载文件名
    link.click(); // 模拟点击
    URL.revokeObjectURL(pdfUrl); // 释放临时 URL
    //window.location.href = pdfUrl;
  };
  //通过 url 地址 直接下载 excel
  const generateExcel_2 = async () => {
    let excelUrl =
      "https://newmail.csc.com.cn/coremail/mbox-data?sid=FAarshDDnCEnzjXpQsmQyBiSVWUVusuz&part=5&mode=download&mboxa=&mid=8%3A1tbiCAcIBmjKHHkMqQAAsj";
    //使用 a 标签下载 以链接配合url的形式下载
    const link = document.createElement("a");
    link.href = excelUrl;
    link.download = "示例excel"; // 设置下载文件名
    link.click(); // 模拟点击
    URL.revokeObjectURL(excelUrl); // 释放临时 URL
    //window.location.href = excelUrl;
  };
  //通过url 地址 直接下载 word
  const generateWord_2 = async () => {
    let wordUrl =
      "https://newmail.csc.com.cn/coremail/mbox-data?sid=FAarshDDnCEnzjXpQsmQyBiSVWUVusuz&part=4&mode=download&mboxa=&mid=8%3A1tbiCAcIBmjKHHkMqQAAsj";
    //使用 a 标签下载 以链接配合url的形式下载
    const link = document.createElement("a");
    link.href = wordUrl;
    link.download = "示例word"; // 设置下载文件名
    link.click(); // 模拟点击
    URL.revokeObjectURL(wordUrl); // 释放临时 URL
    //window.location.href = wordUrl;
  };
  //通过 url 地址直接下载 pdf
  const generatePdf_2 = async () => {
    let pdfUrl =
      "https://newmail.csc.com.cn/coremail/mbox-data?sid=FAarshDDnCEnzjXpQsmQyBiSVWUVusuz&part=3&mode=download&mboxa=&mid=8%3A1tbiCAcIBmjKHHkMqQAAsj";
    //使用 a 标签下载 以链接配合url的形式下载
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "示例pdf"; // 设置下载文件名
    link.click(); // 模拟点击
    URL.revokeObjectURL(pdfUrl); // 释放临时 URL
    //window.location.href = pdfUrl;
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <h2>走文件流</h2>
            <button type="" onClick={mockDownloadExcel}>
              文件流下载excel
            </button>

            <button type="" onClick={generateDocx}>
              文件流下载word
            </button>

            <button type="" onClick={generatePdf}>
              文件流下载pdf
            </button>
          </div>

          <div>
            <h2>通过url+a标签形式下载 1</h2>
            <button type="" onClick={generateExcel_1}>
              直接通过地址下载excel
            </button>
            <button type="" onClick={generateWord_1}>
              直接通过地址下载word
            </button>
            <button type="" onClick={generatePdf_1}>
              直接通过地址下载pdf
            </button>
          </div>

          <div>
            <h2>通过url+a标签形式下载 2</h2>
            <button type="" onClick={generateExcel_2}>
              直接通过地址下载excel
            </button>
            <button type="" onClick={generateWord_2}>
              直接通过地址下载word
            </button>
            <button type="" onClick={generatePdf_2}>
              直接通过地址下载pdf
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
```

- 说明

  以上 demo 用于在企业微信中下载对应文件类型的文件

- #### 文件流形式下载的问题

  在浏览器中没有问题；

  企业微信中 通过文件流 搭配 file-saver 下载文件的方式不适用

  原因：企业微信 WebView 的限制

  1. iOS 企业微信：WebView 不支持直接用 saveAs 下载二进制文件，尤其是 Excel、Word、PDF 这些文件。文件可能直接被打开或者无反应。

  2. Android 企业微信：大部分情况下可以触发下载，但仍受限于系统文件管理器，可能会提示“下载失败”或“无法保存”。

- #### url 资源在服务器的地址（静态资源地址）下载

  在浏览器中没有问题；

  企微中 可以下载 但是没有中转页

- #### url（带参数的地址）

  在浏览器中没有问题；

  企微中 可以下载 有中转页，交互友好

以上 demo 在安装好对应依赖后可以直接执行尝试
