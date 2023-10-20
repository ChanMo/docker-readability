# docker-readability

This Docker image provides a RESTful API for Mozilla's Readability.js library. The API can be used to extract the main content from a web page, making it easier to consume and process.

## Usage

Get the docker image
```
docker pull chanmo/readbility
```

Run the docker
```
docker run --rm -p 3000:3000 chanmo/readbility
```

Use the API
```
curl http://localhost:3000/?url=https://www.chanmo.me/awesome_document.html'
```

Result
```json
{
  "title": "Awesome Document: Dockerize Document Processing",
  "byline": "ChanMo",
  "dir": null,
  "lang": "en",
  "length": 2562,
  "content": "\u003Cdiv id=\"readability-page-1\...",
  "textContent": "\n\n\n\nTable of Contents\n\n\n1. docker-pandoc...",
  "excerpt": "Dockerize document processing with three awesome Docker images: docker-pandoc, docker-unoserver, and docker-poppler. These images make it easy to convert documents between different formats, refresh the TOC in LibreOffice, and extract text from PDF files.",
  "siteName": null
}
```

**Benefits**

* Easy to use: The API is simple to use, requiring only a URL to be provided.
* Scalable: The API can be scaled to handle a large number of requests.
* Flexible: The API can be used in a variety of applications.

**License**

This image is licensed under the MIT License.
