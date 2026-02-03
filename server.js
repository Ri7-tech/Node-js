const http = require("http");
const { information } = require("./data");
const { product } = require("./product");
const {
  productDetail,

  productDetail_view,
} = require("./productDetail");

// http
//   .createServer((request, resp) => {
//     console.log("Hellow");
//     resp.end("hellow Riyaj Chandsaheb");
//   })
//   .listen(8000);

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.end("Server started");
  } else if (request.url == "/add-categories") {
    const result = {
      _status: true,
      _message: "Categories add successful !",

      _data: "data here",
    };
    response.end(JSON.stringify(result));
  } else if (request.url == "/view-categories") {
    if (information.length > 0) {
      const result = {
        _status: true,
        _message: "page successfully found",
        _data: information,
      };
      response.end(JSON.stringify(result));
    } else {
      const result = {
        _status: true,
        message: "page Not found",
        data: information,
      };
      response.end(JSON.stringify(result));
    }
  } else if (request.url == "/product") {
    if (product.length > 0) {
      const result = {
        _status: true,
        _massage: "Page successfully loaded",
        _data: product,
      };
      responce.end(JSON.stringify(result));
    } else {
      const result = {
        _status: false,
        _massage: "Page not found",
        _data: product,
      };
      responce.end(JSON.stringify(result));
    }
  } else if ((request.url = "/productDetail" && request.method == "POST")) {
    if (productDetail != "") {
      const result = {
        _status: true,
        _massage: "Page successfully loaded",
        _data: productDetail,
      };
      response.end(JSON.stringify(result));
    } else {
      const result = {
        _status: false,
        _massage: "Page Not Page",
        _data: productDetail,
      };
      response.end(JSON.stringify(result));
    }
  } else {
    response.end(" 404 Page not found");
  }
});

server.listen(8000, () => {
  console.log("Server is working fine");
});
