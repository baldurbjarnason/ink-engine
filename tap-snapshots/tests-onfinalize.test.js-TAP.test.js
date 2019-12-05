/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
"use strict";
exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize options user/user-123/documents/test-1234/OEBPS/aftermath.xhtml 1`
] = `
Object {
  "metadata": Object {
    "contentType": "application/xhtml+xml",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize options user/user-123/documents/test-1234/OEBPS/aftermath.xhtml.json 1`
] = `
Object {
  "metadata": Object {
    "contentType": "application/json",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize options user/user-123/documents/test-1234/OEBPS/content.opf 1`
] = `
Object {
  "metadata": Object {
    "contentType": "application/oebps-package+xml",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize options user/user-123/documents/test-1234/OEBPS/css/style.css 1`
] = `
Object {
  "metadata": Object {
    "contentType": "text/css",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize options user/user-123/documents/test-1234/OEBPS/toc.ncx 1`
] = `
Object {
  "metadata": Object {
    "contentType": "application/x-dtbncx+xml",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize options user/user-123/documents/test-1234/index.json 1`
] = `
Object {
  "metadata": Object {
    "contentType": "application/json",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize user/user-123/documents/test-1234/OEBPS/aftermath.xhtml 1`
] = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"><html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Test file
</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>
<body class="highlight">
<div class="highlightbody">
<h1>Test file</h1>

</div>

<p><a href="http://kobo.com/">This is test text</a></p>


</body>
</html>
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize user/user-123/documents/test-1234/OEBPS/aftermath.xhtml.json 1`
] = `
{
  "type": "root",
  "children": [
    {
      "type": "doctype",
      "name": "html",
      "public": "-//W3C//DTD XHTML 1.1//EN",
      "system": "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"
    },
    {
      "type": "element",
      "tagName": "html",
      "properties": {
        "xmlns": "http://www.w3.org/1999/xhtml"
      },
      "children": [
        {
          "type": "text",
          "value": "\\n"
        },
        {
          "type": "element",
          "tagName": "head",
          "properties": {},
          "children": [
            {
              "type": "text",
              "value": "\\n"
            },
            {
              "type": "element",
              "tagName": "title",
              "properties": {},
              "children": [
                {
                  "type": "text",
                  "value": "Test file\\n"
                }
              ]
            },
            {
              "type": "text",
              "value": "\\n"
            },
            {
              "type": "element",
              "tagName": "link",
              "properties": {
                "rel": [
                  "stylesheet"
                ],
                "type": "text/css",
                "href": "css/style.css"
              },
              "children": []
            },
            {
              "type": "text",
              "value": "\\n"
            }
          ]
        },
        {
          "type": "text",
          "value": "\\n"
        },
        {
          "type": "element",
          "tagName": "body",
          "properties": {
            "id": "ink-engine"
          },
          "children": [
            {
              "type": "element",
              "tagName": "ink-html",
              "properties": {},
              "children": [
                {
                  "type": "element",
                  "tagName": "ink-body",
                  "properties": {
                    "className": [
                      "highlight"
                    ]
                  },
                  "children": [
                    {
                      "type": "text",
                      "value": "\\n"
                    },
                    {
                      "type": "element",
                      "tagName": "div",
                      "properties": {
                        "className": [
                          "highlightbody"
                        ],
                        "dataInkLocation": 0
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "\\n"
                        },
                        {
                          "type": "element",
                          "tagName": "h1",
                          "properties": {
                            "id": "test-file",
                            "dataInkLocation": 1
                          },
                          "children": [
                            {
                              "type": "text",
                              "value": "Test file"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": "\\n\\n"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "value": "\\n\\n"
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 2
                      },
                      "children": [
                        {
                          "type": "element",
                          "tagName": "a",
                          "properties": {
                            "href": "http://kobo.com/"
                          },
                          "children": [
                            {
                              "type": "text",
                              "value": "This is test text"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "value": "\\n\\n\\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "text",
          "value": "\\n"
        }
      ]
    }
  ],
  "data": {
    "book": {
      "type": "Publication",
      "links": [],
      "resources": [
        {
          "url": "OEBPS/toc.ncx",
          "rel": [
            "ncx"
          ],
          "encodingFormat": "application/x-dtbncx+xml"
        },
        {
          "url": "OEBPS/css/style.css",
          "rel": [],
          "encodingFormat": "text/css"
        },
        {
          "url": "OEBPS/aftermath.xhtml",
          "rel": [],
          "encodingFormat": "application/xhtml+xml"
        },
        {
          "type": "LinkedResource",
          "rel": [
            "alternate",
            "describedby"
          ],
          "url": "OEBPS/content.opf",
          "encodingFormat": "application/oebps-package+xml"
        }
      ],
      "readingOrder": [
        {
          "url": "OEBPS/aftermath.xhtml",
          "rel": [],
          "encodingFormat": "application/xhtml+xml"
        }
      ],
      "json": {
        "epubVersion": "2.0"
      },
      "inLanguage": "en",
      "name": "Minimal Test File",
      "identifier": "urn:D35116F7-9AF8-4C13-B348-85E031B31080",
      "creator": [
        "Baldur Bjarnason"
      ],
      "publisher": [],
      "author": [],
      "translator": [],
      "illustrator": [],
      "editor": [],
      "colorist": [],
      "contributor": [
        "Baldur Bjarnason"
      ]
    },
    "resource": {
      "url": "OEBPS/aftermath.xhtml",
      "rel": [],
      "encodingFormat": "application/xhtml+xml"
    },
    "toc": {
      "type": "NCX",
      "url": "OEBPS/toc.ncx",
      "children": [
        {
          "label": "Test content",
          "url": "OEBPS/aftermath.xhtml",
          "children": []
        }
      ],
      "heading": "Test file",
      "inLanguage": "en"
    }
  }
}

`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize user/user-123/documents/test-1234/OEBPS/content.opf 1`
] = `
Buffer <3c 3f 78 6d 6c 20 76 65 72 73 69 6f 6e 3d 22 31 2e 30 22 20 65 6e 63 6f 64 69 6e 67 3d 22 55 54 46 2d 38 22 3f 3e 0a 3c 70 61 63 6b 61 67 65 20 78 6d 6c 6e 73 3d 22 68 74 74 70 3a 2f 2f 77 77 77 2e 69 64 70 66 2e 6f 72 67 2f 32 30 30 37 2f 6f 70 66 22 20 76 65 72 73 69 6f 6e 3d 22 32 2e 30 22 20 20 75 6e 69 71 75 65 2d 69 64 65 6e 74 69 66 69 65 72 3d 22 75 69 64 22 3e 0a 3c 21 2d 2d 20 0a 32 46 46 30 46 39 33 39 2d 46 42 33 31 2d 34 38 34 36 2d 39 34 38 38 2d 30 35 42 44 46 35 32 34 45 44 44 39 0a 20 2d 2d 3e 0a 20 20 3c 6d 65 74 61 64 61 74 61 20 78 6d 6c 6e 73 3a 64 63 3d 22 68 74 74 70 3a 2f 2f 70 75 72 6c 2e 6f 72 67 2f 64 63 2f 65 6c 65 6d 65 6e 74 73 2f 31 2e 31 2f 22 20 78 6d 6c 6e 73 3a 6f 70 66 3d 22 68 74 74 70 3a 2f 2f 77 77 77 2e 69 64 70 66 2e 6f 72 67 2f 32 30 30 37 2f 6f 70 66 22 3e 0a 20 20 20 20 3c 64 63 3a 74 69 74 6c 65 20 69 64 3d 22 74 69 74 6c 65 22 3e 4d 69 6e 69 6d 61 6c 20 54 65 73 74 20 46 69 6c 65 3c 2f 64 63 3a 74 69 74 6c 65 3e 0a 20 20 20 20 3c 64 63 3a 63 72 65 61 74 6f 72 3e 42 61 6c 64 75 72 20 42 6a 61 72 6e 61 73 6f 6e 3c 2f 64 63 3a 63 72 65 61 74 6f 72 3e 0a 20 20 20 20 3c 64 63 3a 69 64 65 6e 74 69 66 69 65 72 20 69 64 3d 22 75 69 64 22 3e 75 72 6e 3a 44 33 35 31 31 36 46 37 2d 39 41 46 38 2d 34 43 31 33 2d 42 33 34 38 2d 38 35 45 30 33 31 42 33 31 30 38 30 3c 2f 64 63 3a 69 64 65 6e 74 69 66 69 65 72 3e 0a 20 20 20 20 3c 64 63 3a 6c 61 6e 67 75 61 67 65 3e 65 6e 3c 2f 64 63 3a 6c 61 6e 67 75 61 67 65 3e 20 20 20 20 0a 0a 20 20 20 20 3c 64 63 3a 64 61 74 65 3e 32 30 31 33 2d 30 31 2d 31 39 3c 2f 64 63 3a 64 61 74 65 3e 0a 20 20 20 20 3c 64 63 3a 72 69 67 68 74 73 3e 43 6f 70 79 72 69 67 68 74 20 32 30 31 33 20 42 61 6c 64 75 72 20 42 6a 61 72 6e 61 73 6f 6e 3c 2f 64 63 3a 72 69 67 68 74 73 3e 0a 3c 2f 6d 65 74 61 64 61 74 61 3e 0a 20 20 3c 6d 61 6e 69 66 65 73 74 3e 0a 20 20 20 20 3c 69 74 65 6d 20 69 64 3d 22 6e 63 78 22 20 68 72 65 66 3d 22 74 6f 63 2e 6e 63 78 22 20 6d 65 64 69 61 2d 74 79 70 65 3d 22 61 70 70 6c 69 63 61 74 69 6f 6e 2f 78 2d 64 74 62 6e 63 78 2b 78 6d 6c 22 20 2f 3e 0a 20 20 20 20 3c 69 74 65 6d 20 69 64 3d 22 73 74 79 6c 65 22 20 68 72 65 66 3d 22 63 73 73 2f 73 74 79 6c 65 2e 63 73 73 22 20 6d 65 64 69 61 2d 74 79 70 65 3d 22 74 65 78 74 2f 63 73 73 22 2f 3e 0a 20 20 20 20 0a 20 20 20 20 0a 0a 09 3c 69 74 65 6d 20 69 64 3d 22 61 66 74 65 72 6d 61 74 68 22 20 68 72 65 66 3d 22 61 66 74 65 72 6d 61 74 68 2e 78 68 74 6d 6c 22 20 6d 65 64 69 61 2d 74 79 70 65 3d 22 61 70 70 6c 69 63 61 74 69 6f 6e 2f 78 68 74 6d 6c 2b 78 6d 6c 22 20 2f 3e 20 0a 20 20 3c 2f 6d 61 6e 69 66 65 73 74 3e 0a 20 20 3c 73 70 69 6e 65 20 74 6f 63 3d 22 6e 63 78 22 3e 0a 20 20 3c 69 74 65 6d 72 65 66 20 69 64 72 65 66 3d 22 61 66 74 65 72 6d 61 74 68 22 20 6c 69 6e 65 61 72 3d 22 79 65 73 22 3e 3c 2f 69 74 65 6d 72 65 66 3e 0a 20 20 3c 2f 73 70 69 6e 65 3e 0a 3c 2f 70 61 63 6b 61 67 65 3e>
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize user/user-123/documents/test-1234/OEBPS/css/style.css 1`
] = `

  #ink-engine ink-body {
    color: black;
    font-family: "GaramondPremrProCapt", "Iowan Old Style", serif; }

  #ink-engine h1, #ink-engine h2, #ink-engine h3, #ink-engine h4, #ink-engine h5, #ink-engine h6 {
    font-family: "GaramondPremrProDisp", "Iowan Old Style", serif; }


  #ink-engine ink-body {
    font-size: 18px;
    line-height: 22px; }

#ink-engine h2 {
	font-variant: small-caps;
}

  #ink-engine p + p {
    text-indent: 27px; }

#ink-engine p {
margin: 0;
}

#ink-engine a {
padding: 10px;
color: white;
background-color: blue;
}

#ink-engine a:link {
color: white;
background-color: blue;
}



`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize user/user-123/documents/test-1234/OEBPS/toc.ncx 1`
] = `
Buffer <3c 3f 78 6d 6c 20 76 65 72 73 69 6f 6e 3d 22 31 2e 30 22 20 65 6e 63 6f 64 69 6e 67 3d 22 55 54 46 2d 38 22 20 73 74 61 6e 64 61 6c 6f 6e 65 3d 22 6e 6f 22 3f 3e 0a 3c 21 44 4f 43 54 59 50 45 20 6e 63 78 20 50 55 42 4c 49 43 20 22 2d 2f 2f 4e 49 53 4f 2f 2f 44 54 44 20 6e 63 78 20 32 30 30 35 2d 31 2f 2f 45 4e 22 20 22 68 74 74 70 3a 2f 2f 77 77 77 2e 64 61 69 73 79 2e 6f 72 67 2f 7a 33 39 38 36 2f 32 30 30 35 2f 6e 63 78 2d 32 30 30 35 2d 31 2e 64 74 64 22 3e 0a 0a 3c 6e 63 78 20 78 6d 6c 6e 73 3d 22 68 74 74 70 3a 2f 2f 77 77 77 2e 64 61 69 73 79 2e 6f 72 67 2f 7a 33 39 38 36 2f 32 30 30 35 2f 6e 63 78 2f 22 20 76 65 72 73 69 6f 6e 3d 22 32 30 30 35 2d 31 22 3e 0a 20 20 20 20 3c 68 65 61 64 3e 0a 20 20 20 20 20 20 20 20 3c 6d 65 74 61 20 6e 61 6d 65 3d 22 64 74 62 3a 75 69 64 22 20 63 6f 6e 74 65 6e 74 3d 22 75 72 6e 3a 44 30 42 34 35 32 38 44 2d 41 46 38 30 2d 34 41 37 42 2d 38 31 41 44 2d 42 39 46 30 35 43 32 45 36 39 42 34 22 3e 3c 2f 6d 65 74 61 3e 0a 20 20 20 20 20 20 20 20 3c 6d 65 74 61 20 6e 61 6d 65 3d 22 64 74 62 3a 64 65 70 74 68 22 20 63 6f 6e 74 65 6e 74 3d 22 31 22 3e 3c 2f 6d 65 74 61 3e 0a 20 20 20 20 20 20 20 20 3c 6d 65 74 61 20 6e 61 6d 65 3d 22 64 74 62 3a 74 6f 74 61 6c 50 61 67 65 43 6f 75 6e 74 22 20 63 6f 6e 74 65 6e 74 3d 22 30 22 3e 3c 2f 6d 65 74 61 3e 0a 20 20 20 20 20 20 20 20 3c 6d 65 74 61 20 6e 61 6d 65 3d 22 64 74 62 3a 6d 61 78 50 61 67 65 4e 75 6d 62 65 72 22 20 63 6f 6e 74 65 6e 74 3d 22 30 22 3e 3c 2f 6d 65 74 61 3e 0a 20 20 20 20 3c 2f 68 65 61 64 3e 0a 20 20 20 20 3c 64 6f 63 54 69 74 6c 65 3e 0a 20 20 20 20 20 20 20 20 3c 74 65 78 74 3e 54 65 73 74 20 66 69 6c 65 3c 2f 74 65 78 74 3e 0a 20 20 20 20 3c 2f 64 6f 63 54 69 74 6c 65 3e 0a 20 20 20 20 3c 6e 61 76 4d 61 70 3e 0a 20 20 20 20 20 20 20 20 3c 6e 61 76 50 6f 69 6e 74 20 69 64 3d 22 6e 61 76 50 6f 69 6e 74 2d 32 22 20 70 6c 61 79 4f 72 64 65 72 3d 22 31 22 3e 0a 20 20 20 20 20 20 20 20 20 20 20 20 3c 6e 61 76 4c 61 62 65 6c 3e 0a 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 3c 74 65 78 74 3e 54 65 73 74 20 63 6f 6e 74 65 6e 74 0a 3c 2f 74 65 78 74 3e 0a 20 20 20 20 20 20 20 20 20 20 20 20 3c 2f 6e 61 76 4c 61 62 65 6c 3e 0a 20 20 20 20 20 20 20 20 20 20 20 20 3c 63 6f 6e 74 65 6e 74 20 73 72 63 3d 22 61 66 74 65 72 6d 61 74 68 2e 78 68 74 6d 6c 22 3e 3c 2f 63 6f 6e 74 65 6e 74 3e 0a 20 20 20 20 20 20 20 20 3c 2f 6e 61 76 50 6f 69 6e 74 3e 0a 20 20 20 20 3c 2f 6e 61 76 4d 61 70 3e 0a 3c 2f 6e 63 78 3e>
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub finalize user/user-123/documents/test-1234/index.json 1`
] = `
{"type":"Publication","links":[],"resources":[{"url":"OEBPS/toc.ncx","rel":["ncx"],"encodingFormat":"application/x-dtbncx+xml"},{"url":"OEBPS/css/style.css","rel":[],"encodingFormat":"text/css"},{"url":"OEBPS/aftermath.xhtml","rel":[],"encodingFormat":"application/xhtml+xml"},{"type":"LinkedResource","rel":["alternate","describedby"],"url":"OEBPS/content.opf","encodingFormat":"application/oebps-package+xml"}],"readingOrder":[{"url":"OEBPS/aftermath.xhtml","rel":[],"encodingFormat":"application/xhtml+xml"}],"json":{"epubVersion":"2.0"},"inLanguage":"en","name":"Minimal Test File","identifier":"urn:D35116F7-9AF8-4C13-B348-85E031B31080","creator":["Baldur Bjarnason"],"publisher":[],"author":[],"translator":[],"illustrator":[],"editor":[],"colorist":[],"contributor":["Baldur Bjarnason"]}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize > epub first result 1`
] = `
Object {
  "payload": Object {
    "author": Array [],
    "colorist": Array [],
    "contributor": Array [
      "Baldur Bjarnason",
    ],
    "creator": Array [
      "Baldur Bjarnason",
    ],
    "editor": Array [],
    "identifier": "urn:D35116F7-9AF8-4C13-B348-85E031B31080",
    "illustrator": Array [],
    "inLanguage": "en",
    "json": Object {
      "epubVersion": "2.0",
    },
    "links": Array [],
    "name": "Minimal Test File",
    "publisher": Array [],
    "readingOrder": Array [
      Object {
        "encodingFormat": "application/xhtml+xml",
        "rel": Array [],
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/documents/test-1234/OEBPS/aftermath.xhtml",
      },
    ],
    "resources": Array [
      Object {
        "encodingFormat": "application/x-dtbncx+xml",
        "rel": Array [
          "ncx",
        ],
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/documents/test-1234/OEBPS/toc.ncx",
      },
      Object {
        "encodingFormat": "text/css",
        "rel": Array [],
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/documents/test-1234/OEBPS/css/style.css",
      },
      Object {
        "encodingFormat": "application/xhtml+xml",
        "rel": Array [],
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/documents/test-1234/OEBPS/aftermath.xhtml",
      },
      Object {
        "encodingFormat": "application/oebps-package+xml",
        "rel": Array [
          "alternate",
          "describedby",
        ],
        "type": "LinkedResource",
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/documents/test-1234/OEBPS/content.opf",
      },
      Object {
        "encodingFormat": "contentType",
        "rel": Array [
          "alternate",
        ],
        "type": "LinkedResource",
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/publications/test-1234/test-epub.epub",
      },
    ],
    "translator": Array [],
    "type": "Publication",
    "wordCount": 6,
  },
  "publication": "test-1234",
  "userId": "user-123",
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize options user/user-123/documents/test-1234/1.png 1`
] = `
Object {
  "metadata": Object {
    "contentType": "image/png",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize options user/user-123/documents/test-1234/index.html 1`
] = `
Object {
  "metadata": Object {
    "contentType": "text/html",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize options user/user-123/documents/test-1234/index.html.json 1`
] = `
Object {
  "metadata": Object {
    "contentType": "application/json",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize options user/user-123/documents/test-1234/index.json 1`
] = `
Object {
  "metadata": Object {
    "contentType": "application/json",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize options user/user-123/thumbnails/test-1234/1.png 1`
] = `
Object {
  "metadata": Object {
    "contentType": "image/png",
  },
  "resumable": false,
}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize user/user-123/documents/test-1234/1.png 1`
] = `
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize user/user-123/documents/test-1234/index.html 1`
] = `
<!DOCTYPE html><html><head>
    
    
    <title>test</title>
  </head>
  <body>
  <p>[Your Name]</p><p>[Instructor Name]</p><p>[Course Number]</p><p>[Date]</p><h1>Test File: Sub title to text file</h1><p>[Research papers that use MLA format do not include a cover page unless requested by your instructor. Instead, start with the information shown. Do not bold the title or use all capital letters. Capitalise the first and last words of the title, and all principal words. If your paper includes a subtitle, separate it from the title by a colon and space, as shown. For more specific guidance on capitalisation, see the <em>MLA Handbook for Writers of Research Papers, 7th Edition (MLA 7</em><em><sup>th</sup></em><em> Edition)</em>.]</p><p>[All text – including titles, quotations, notes and list of works cited – uses double-line spacing. Body text and note text use a half-inch first-line indent. The list of works cited uses a half-inch hanging indent. Table titles and source text use a quarter-inch indent. To access all of these text formats, have a look at Styles on the Home tab of the ribbon.]</p><p>[MLA format discourages extensive use of content notes. But when you need to add notes, you can use either endnotes or footnotes. <em>MLA 7th Edition</em> indicates that you should use a superscript, Arabic numeral at an appropriate place in the text for the note reference. To begin the note text, use the same numeral, not superscript, followed by a full stop.]</p><p>[If you use endnotes, they should be on a separate page, at the end of your text and preceding the list of works cited. If you use footnotes, consult your professor for preferred format.]</p><blockquote>[For quotations of more than four lines, indent the quote one inch from the left margin and do not use quotation marks. This style is named Quote. Apply this or any text style with just a tap, on the Home tab, under Styles. Note that, for shorter quotations, you can put them in quotation marks and incorporate them directly into text.]</blockquote><p>Table 1</p><p>[This sample table is formatted to follow MLA guidelines. To add a new table, tap Table on the Insert tab. When you create a new table in this document, it will automatically use MLA formatting.]</p><table><thead><tr><th></th><th><p>Column Heading</p></th><th><p>Column Heading</p></th><th><p>Column Heading</p></th></tr></thead><tbody><tr><td><p>Row Heading</p></td><td></td><td></td><td></td></tr><tr><td><p>Row Heading</p></td><td></td><td></td><td></td></tr><tr><td><p>Row Heading</p></td><td></td><td></td><td></td></tr></tbody></table><p>Source: [This source text uses a style named Table Source.]</p><p>[This note text uses a style named Table Note. Table notes use a lowercase letter instead of Arabic numerals to differentiate them from the notes to body content.]</p><p><img alt="Fish with colourful coral" src="1.png"></p><p>Fig. 1. [This figure caption uses the No Indent style. Label figures with the abbreviation “Fig.” and a figure number.]</p><p>[There is a sample <em>Works Cited</em> list that follows. The body content on that page uses the Bibliography style. Note that MLA rules for citations and references are extensive. So it’s a good idea to refer to <em>MLA 7th Edition</em> for further information.] (AuthorSurname Pages)</p><p>[To use this template when creating the outline for your paper, tap No Indent in Styles on the Home tab. Then, on the same tab, in the Paragraph group, tap the Multilevel List icon, then tap the MLA Outline style that appears under List Styles. The first six levels of this list style correspond to the outline levels defined in <em>MLA 7th Edition</em>.]</p><p>For additional guidance on formatting your research paper, consult <em>MLA 7th Edition</em> as well as your instructor.</p><h2>Works Cited</h2><p>AuthorSurname, FirstName. <em>Title of the Book Being Referenced</em>. City Name: Name of Publisher, Year. Type of Medium (e.g. Print).</p><p>Surname, First, Middle. "Article Title." <em>Journal Title</em> (Year): Pages From - To. Print.</p>
  
  
  </body></html>
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize user/user-123/documents/test-1234/index.html.json 1`
] = `
{
  "type": "root",
  "children": [
    {
      "type": "doctype",
      "name": "html",
      "public": null,
      "system": null
    },
    {
      "type": "element",
      "tagName": "html",
      "properties": {},
      "children": [
        {
          "type": "element",
          "tagName": "head",
          "properties": {},
          "children": [
            {
              "type": "text",
              "value": "\\n    \\n    \\n    "
            },
            {
              "type": "element",
              "tagName": "title",
              "properties": {},
              "children": [
                {
                  "type": "text",
                  "value": "test"
                }
              ]
            },
            {
              "type": "text",
              "value": "\\n  "
            }
          ]
        },
        {
          "type": "text",
          "value": "\\n  "
        },
        {
          "type": "element",
          "tagName": "body",
          "properties": {
            "id": "ink-engine"
          },
          "children": [
            {
              "type": "element",
              "tagName": "ink-html",
              "properties": {},
              "children": [
                {
                  "type": "element",
                  "tagName": "ink-body",
                  "properties": {},
                  "children": [
                    {
                      "type": "text",
                      "value": "\\n  "
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 0
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[Your Name]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 1
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[Instructor Name]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 2
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[Course Number]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 3
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[Date]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "h1",
                      "properties": {
                        "id": "test-file-sub-title-to-text-file",
                        "dataInkLocation": 4
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "Test File: Sub title to text file"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 5
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[Research papers that use MLA format do not include a cover page unless requested by your instructor. Instead, start with the information shown. Do not bold the title or use all capital letters. Capitalise the first and last words of the title, and all principal words. If your paper includes a subtitle, separate it from the title by a colon and space, as shown. For more specific guidance on capitalisation, see the "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "MLA Handbook for Writers of Research Papers, 7th Edition (MLA 7"
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "element",
                              "tagName": "sup",
                              "properties": {},
                              "children": [
                                {
                                  "type": "text",
                                  "value": "th"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": " Edition)"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": ".]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 6
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[All text – including titles, quotations, notes and list of works cited – uses double-line spacing. Body text and note text use a half-inch first-line indent. The list of works cited uses a half-inch hanging indent. Table titles and source text use a quarter-inch indent. To access all of these text formats, have a look at Styles on the Home tab of the ribbon.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 7
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[MLA format discourages extensive use of content notes. But when you need to add notes, you can use either endnotes or footnotes. "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "MLA 7th Edition"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": " indicates that you should use a superscript, Arabic numeral at an appropriate place in the text for the note reference. To begin the note text, use the same numeral, not superscript, followed by a full stop.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 8
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[If you use endnotes, they should be on a separate page, at the end of your text and preceding the list of works cited. If you use footnotes, consult your professor for preferred format.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "blockquote",
                      "properties": {
                        "dataInkLocation": 9
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[For quotations of more than four lines, indent the quote one inch from the left margin and do not use quotation marks. This style is named Quote. Apply this or any text style with just a tap, on the Home tab, under Styles. Note that, for shorter quotations, you can put them in quotation marks and incorporate them directly into text.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 10
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "Table 1"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 11
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[This sample table is formatted to follow MLA guidelines. To add a new table, tap Table on the Insert tab. When you create a new table in this document, it will automatically use MLA formatting.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "table",
                      "properties": {
                        "dataInkLocation": 12
                      },
                      "children": [
                        {
                          "type": "element",
                          "tagName": "thead",
                          "properties": {},
                          "children": [
                            {
                              "type": "element",
                              "tagName": "tr",
                              "properties": {},
                              "children": [
                                {
                                  "type": "element",
                                  "tagName": "th",
                                  "properties": {},
                                  "children": []
                                },
                                {
                                  "type": "element",
                                  "tagName": "th",
                                  "properties": {},
                                  "children": [
                                    {
                                      "type": "element",
                                      "tagName": "p",
                                      "properties": {
                                        "dataInkLocation": 13
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "value": "Column Heading"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "element",
                                  "tagName": "th",
                                  "properties": {},
                                  "children": [
                                    {
                                      "type": "element",
                                      "tagName": "p",
                                      "properties": {
                                        "dataInkLocation": 14
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "value": "Column Heading"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "element",
                                  "tagName": "th",
                                  "properties": {},
                                  "children": [
                                    {
                                      "type": "element",
                                      "tagName": "p",
                                      "properties": {
                                        "dataInkLocation": 15
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "value": "Column Heading"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "element",
                          "tagName": "tbody",
                          "properties": {},
                          "children": [
                            {
                              "type": "element",
                              "tagName": "tr",
                              "properties": {},
                              "children": [
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": [
                                    {
                                      "type": "element",
                                      "tagName": "p",
                                      "properties": {
                                        "dataInkLocation": 16
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "value": "Row Heading"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "tagName": "tr",
                              "properties": {},
                              "children": [
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": [
                                    {
                                      "type": "element",
                                      "tagName": "p",
                                      "properties": {
                                        "dataInkLocation": 17
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "value": "Row Heading"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                }
                              ]
                            },
                            {
                              "type": "element",
                              "tagName": "tr",
                              "properties": {},
                              "children": [
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": [
                                    {
                                      "type": "element",
                                      "tagName": "p",
                                      "properties": {
                                        "dataInkLocation": 18
                                      },
                                      "children": [
                                        {
                                          "type": "text",
                                          "value": "Row Heading"
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                },
                                {
                                  "type": "element",
                                  "tagName": "td",
                                  "properties": {},
                                  "children": []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 19
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "Source: [This source text uses a style named Table Source.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 20
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[This note text uses a style named Table Note. Table notes use a lowercase letter instead of Arabic numerals to differentiate them from the notes to body content.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 21
                      },
                      "children": [
                        {
                          "type": "element",
                          "tagName": "img",
                          "properties": {
                            "alt": "Fish with colourful coral",
                            "src": "1.png"
                          },
                          "children": []
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 22
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "Fig. 1. [This figure caption uses the No Indent style. Label figures with the abbreviation “Fig.” and a figure number.]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 23
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[There is a sample "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "Works Cited"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": " list that follows. The body content on that page uses the Bibliography style. Note that MLA rules for citations and references are extensive. So it’s a good idea to refer to "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "MLA 7th Edition"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": " for further information.] (AuthorSurname Pages)"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 24
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "[To use this template when creating the outline for your paper, tap No Indent in Styles on the Home tab. Then, on the same tab, in the Paragraph group, tap the Multilevel List icon, then tap the MLA Outline style that appears under List Styles. The first six levels of this list style correspond to the outline levels defined in "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "MLA 7th Edition"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": ".]"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 25
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "For additional guidance on formatting your research paper, consult "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "MLA 7th Edition"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": " as well as your instructor."
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "h2",
                      "properties": {
                        "id": "works-cited",
                        "dataInkLocation": 26
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "Works Cited"
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 27
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "AuthorSurname, FirstName. "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "Title of the Book Being Referenced"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": ". City Name: Name of Publisher, Year. Type of Medium (e.g. Print)."
                        }
                      ]
                    },
                    {
                      "type": "element",
                      "tagName": "p",
                      "properties": {
                        "dataInkLocation": 28
                      },
                      "children": [
                        {
                          "type": "text",
                          "value": "Surname, First, Middle. \\"Article Title.\\" "
                        },
                        {
                          "type": "element",
                          "tagName": "em",
                          "properties": {},
                          "children": [
                            {
                              "type": "text",
                              "value": "Journal Title"
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "value": " (Year): Pages From - To. Print."
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "value": "\\n  \\n  \\n  "
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "data": {
    "book": {
      "name": "test",
      "resources": [
        {
          "url": "index.html",
          "rel": [
            "alternate"
          ],
          "encodingFormat": "text/html"
        },
        {
          "url": "1.png",
          "rel": [],
          "encodingFormat": "image/png"
        }
      ],
      "readingOrder": [
        {
          "url": "index.html",
          "rel": [],
          "encodingFormat": "text/html"
        }
      ]
    },
    "resource": {
      "url": "index.html",
      "rel": [
        "alternate"
      ],
      "encodingFormat": "text/html"
    },
    "toc": false
  }
}

`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize user/user-123/documents/test-1234/index.json 1`
] = `
{"name":"test","resources":[{"url":"index.html","rel":["alternate"],"encodingFormat":"text/html"},{"url":"1.png","rel":[],"encodingFormat":"image/png"}],"readingOrder":[{"url":"index.html","rel":[],"encodingFormat":"text/html"}]}
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx finalize user/user-123/thumbnails/test-1234/1.png 1`
] = `
Buffer <ff d8 ff db 00 43 00 0d 09 0a 0b 0a 08 0d 0b 0a 0b 0e 0e 0d 0f 13 20 15 13 12 12 13 27 1c 1e 17 20 2e 29 31 30 2e 29 2d 2c 33 3a 4a 3e 33 36 46 37 2c 2d 40 57 41 46 4c 4e 52 53 52 32 3e 5a 61 5a 50 60 4a 51 52 4f ff db 00 43 01 0e 0e 0e 13 11 13 26 15 15 26 4f 35 2d 35 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f ff c0 00 11 08 01 0b 01 90 03 01 22 00 02 11 01 03 11 01 ff c4 00 1b 00 00 02 03 01 01 01 00 00 00 00 00 00 00 00 00 00 03 04 01 02 05 06 00 07 ff c4 00 3e 10 00 02 01 03 03 03 03 02 04 05 03 03 04 01 05 01 01 02 03 00 04 11 12 21 31 05 41 51 13 22 61 71 81 06 14 32 91 23 42 a1 b1 c1 52 e1 f0 15 33 d1 24 62 72 f1 34 07 16 35 63 82 43 ff c4 00 1a 01 00 03 01 01 01 01 00 00 00 00 00 00 00 00 00 00 01 02 03 04 05 00 06 ff c4 00 31 11 00 01 04 01 03 02 04 04 06 03 01 01 00 00 00 00 01 00 02 03 11 21 04 12 31 22 41 13 51 61 f0 05 71 81 91 32 a1 b1 c1 d1 e1 14 23 42 f1 15 ff da 00 0c 03 01 00 02 11 03 11 00 3f 00 f9 e0 90 81 8e d5 39 ee 4d 0e a4 1c f3 57 b5 12 d5 6a f5 40 de a4 57 90 53 57 52 33 82 36 aa 80 7c 54 9c 78 de 8a 52 ae 41 c7 18 aa fc 54 06 23 6c d4 e6 88 41 58 e6 ac b9 e2 aa 0e 7e d4 68 d4 31 f7 1c 53 04 84 d2 86 03 4e 71 c5 4c 01 5a 51 ac 1d 3d c8 ed 57 f4 b5 60 06 c0 27 bd 3e d6 c6 28 5f 46 94 f6 e9 d2 c4 13 d8 96 3e 07 8a ab 58 4a 93 9e 00 a4 2b 68 f4 a1 72 fe e6 04 26 83 c1 f2 7e 2a ec ee 83 12 81 ae 37 2a cc ae 09 51 e3 03 6f bd 52 70 5a 08 61 74 52 cb 9c 2a 80 36 3c 1d 5d ff 00 c5 5a d9 86 a1 1c 92 86 31 ae 01 20 30 03 e3 ff 00 35 51 8c 05 13 c5 94 48 74 6a 12 3e 78 d2 32 a3 fa 60 51 18 47 e9 e9 c0 70 b9 2a a3 6c 7d 7c 55 97 2a b2 02 ea 18 ed 8d 24 81 83 c6 7c d7 99 9a 28 cb 1d 0a 9b 21 57 5d 41 ce fe 36 c7 c5 5b 00 28 dd 95 74 59 25 62 fe 92 a2 f1 14 0a 46 f8 f2 73 54 2a 1f 7d 02 33 a7 dc c1 09 d2 0f f6 f8 aa 65 e0 45 1e 9b 1e da cb 7d f6 ef 46 d5 20 50 1c eb 3b 90 0e 4e 3e 77 a3 e8 87 19 4b c6 24 88 17 56 12 1c e0 10 c4 b6 0f 7d 3d e9 84 5d 60 cc a8 d2 c9 9c 1d 7b 13 f4 f0 6a 26 68 94 bd cb 48 44 cf c0 f4 b6 5f a5 4c 5b 94 5d 52 e2 35 f6 80 bc 8e 4d 16 f3 48 38 92 2d 48 0e f3 1d 71 61 4e 43 2b 72 3e 07 d2 80 b6 fa e4 7d 6f 23 63 8d 20 02 48 e3 1d a8 b9 d1 18 4c bf f1 0f b7 2b ee de 83 a2 4b 73 a1 92 6d 27 b1 60 72 38 ce 71 c7 d2 89 ae eb cd be ca 42 ce e1 b3 12 8c 60 93 93 ee fb 83 56 51 ec 0a f2 8c 03 86 c3 00 07 ed 54 91 d8 ab 94 58 50 81 81 a3 b8 f1 e7 35 6b 82 cc 8a ac a9 e9 ae 35 b2 ae 31 f1 e6 95 1c 95 64 8d dd cc 61 97 0c 0e 97 07 23 6e d9 a9 40 c4 00 87 5a 29 db 07 fc 50 f5 a4 6c 5a 28 e5 11 36 d8 e4 1c 77 cd 4b ab 34 a0 00 15 4e fa 54 13 bf c8 ed 44 21 49 b8 4f bd 89 27 1d 87 9a ec 7f 0e 4f 23 c4 f1 b0 ca cb fa 00 23 77 03 f9 b1 c0 38 e2 b8 a4 68 94 69 79 74 b1 3b ec 76 ad 3e 89 77 05 a7 52 8e 49 9d c4 6b 90 4c 7c 8c d1 78 de c2 14 db d2 f0 e5 dd 3a 5c 3d 94 91 ac 29 16 54 9f 49 08 52 7f c6 33 9a ab c6 6d e0 02 e8 fa a5 70 57 49 cb 31 c6 d8 fa 7c 56 5c 7f 89 22 9e e9 e1 58 98 5b b8 6e 7f 51 3e 07 81 b5 31 1c eb d5 d8 a2 38 0c 8c 37 0c 14 e4 78 f3 8a c5 e1 bc 7e 21 41 68 32 b0 9a 69 b2 8d 6d d4 55 bd 97 56 f2 44 34 fa 8a cd 18 65 d2 71 b8 c0 d8 7d 69 eb a6 56 46 80 85 31 b2 69 6e f9 cf 7a 5e ce ce 24 b9 cc 89 a9 e3 39 0e c7 7d 43 e7 c1 fd ab c7 a8 c2 83 d5 71 ad 8e 02 c6 bb e9 f8 3e 0f 34 8e 00 bb a0 2a 35 c4 33 fd 85 4a 4d 1c ca 22 82 53 29 8c 60 f7 3f ef 4e b0 48 20 23 db e0 96 ac bb db c8 a7 b6 53 3d aa 17 dc a8 20 b1 51 e7 23 8a 48 cd 24 f2 03 75 17 a8 a0 e5 36 c0 1b 73 9d 58 db f7 a6 10 97 73 84 87 50 18 68 64 ad 19 ee 51 1d 58 bb 30 ed b6 49 3f 02 a2 3b eb 8f 40 87 0a ae ac 72 40 00 91 db 61 c1 a4 9a 46 9c fa 36 c2 46 20 6a 2f 8c 64 7c 1e f9 e2 97 92 55 83 01 50 68 38 04 05 dd 8e 3b 9e 33 f0 37 aa 08 81 14 a0 ed 43 81 b1 c2 35 e5 df 50 04 34 08 0b 16 c8 d4 db 8e d9 c7 1d aa 2d 1a 4b d5 fe 19 f7 0c 19 3b e8 a1 b1 95 2e 74 3e eb 30 04 64 60 28 f8 ce 46 33 dc f3 4b ca e4 c0 ca 18 24 67 03 0a 48 0d bf 20 0f d5 56 0d 15 41 67 2f 3b ba ac a6 27 9e 03 29 00 29 d3 ff 00 6c b3 e7 03 e9 c5 24 d2 6b 91 fd 44 0e ab ee 6e f9 df b8 1d aa 64 0a 55 21 42 ec 09 db 57 23 e2 97 9a f2 65 cc 51 a0 68 d7 6c 2a 84 5f f7 df b9 aa 34 57 0b 3b ba cd a7 44 c2 68 d2 36 7c c0 a0 fb 17 83 fb 52 8a ab 1a ac 60 36 00 ca e7 7d be b5 4f cd b2 c6 b1 b8 0a 81 73 b1 1c f9 e3 71 43 86 ea 26 90 c2 b3 eb 60 36 65 07 48 fb 91 4e 05 20 e6 38 8b 4d aa 33 2a b8 78 f4 93 81 b9 c9 3d f0 3e 3b 9a a5 ca fa 4c 1b 5c 41 41 18 79 32 a0 e7 fc 55 f5 b1 2c 4a cc 8c c0 63 0c 78 ff 00 39 aa 4d 23 4d 1b 87 59 25 3a 00 11 aa 83 b7 ce 78 14 2c f2 bc 1a db 02 95 5c 4b ea 20 d0 8a 98 dd b5 12 4f d3 e3 e6 a5 a3 0a 0b 36 b5 63 fa 72 bb 30 fb f6 a9 77 53 ba 44 11 40 1e d0 78 fd ea d7 97 02 47 0c 14 16 20 64 01 8e 3e a7 7f f3 4d 9c 21 8c 94 17 50 64 04 06 3f e9 ca ef 9f 8a a1 c2 13 c6 ac e4 06 3d fe 95 70 ed 0e 1f dd 9c 12 09 1b 9c fd 6a 8f a6 33 92 53 7c 7b b6 3f d6 9a d7 a9 5a 4c 16 18 3a 8e 06 4f 93 de 86 8c 09 ce e4 60 e3 07 bd 5f 65 d4 08 0c 71 80 43 6c 3e 76 e6 a8 00 55 1a 76 c6 db 53 0f 24 de ab e7 27 19 da ad a7 3b 0a a9 ce 71 44 03 3c 57 01 7d 61 53 e9 e0 1c 9c 1f 15 5e 32 0d 5c 92 db 72 78 aa 1c e3 26 89 48 09 ee a4 60 2f 35 15 3f ab c0 af 05 34 11 52 00 3b d4 ec 36 a9 f6 91 b8 23 e9 51 80 4d 10 94 ab 2b 0a 2c 4c 0a 11 8a 16 37 e2 bc 72 bb 66 98 14 84 5a d1 b2 09 1c 6f 71 3e a7 54 60 04 4a c0 16 3f 5e c0 79 c5 5a 56 56 4d 32 3f f1 19 72 40 c9 6c fc f8 ff 00 c5 2b 00 32 33 02 a5 8a 29 c0 07 19 fb d3 33 2c 89 1c 7f c3 f4 cb c6 09 8c 06 0c 57 fd 47 3e 7f b5 68 61 c2 83 86 57 97 4a 8c fb 94 91 8d 5a 81 18 3f ca 49 db 14 c5 aa ab 32 96 87 d4 00 e3 ff 00 90 a5 a4 26 48 55 0c 80 22 9c a2 96 e0 9f 8e 3f 7a 66 cb 11 ee d1 92 b8 e5 c1 c0 cf 04 81 cd 51 bc a9 3f 84 54 62 ca 43 60 2e 08 c8 5d 20 6d c0 fa d5 bd 35 3a 75 c8 ea 8b 80 ac e7 38 07 b0 1c 79 a9 91 1e 09 1a de 79 ca 48 cb bb a9 0e 0e 77 d3 fb e0 1e d5 55 18 91 03 16 f7 ae 4a e9 c8 cf 7f f1 55 06 d4 48 a5 12 fb 42 b8 98 ac 7a bf 51 18 3e 32 4f 93 57 76 25 99 62 50 5b da 03 2b 64 63 fc 9a 0f b4 cc a6 39 44 71 a8 c3 3b 0c 64 f8 00 f7 f9 a2 47 25 bc 17 01 a4 47 68 8a 15 5f 4a 50 09 38 c6 7c e3 3f d2 86 e4 76 a2 84 55 b8 2c e1 a4 6c 64 05 39 07 e3 e3 fa f1 43 8e 36 65 dd 9f cf b4 80 71 e4 8f 15 31 86 9a f2 38 21 b6 89 a5 6c 05 54 3b 02 7e 49 df fa 55 ee 56 48 c0 8e e5 84 b8 90 ea d0 15 b3 f7 1b 62 98 14 b4 42 04 3a e6 90 c6 9e 99 f4 8e c7 3b 3f ef ff 00 d5 12 d4 8f 58 95 94 23 05 62 70 c4 96 3e 05 0f 52 34 0d 00 94 6a 94 fe 84 5d b1 e0 ff 00 7f b5 19 55 91 c5 ac 52 aa 3a 9c 33 a9 5c 13 d8 67 8f de 88 39 44 e4 21 c5 1a 43 23 4d a1 9d 8f 18 5d c6 db e3 e2 a5 15 a2 24 7a 72 89 0f b9 8c 84 64 8f 19 35 76 37 32 4d 2c 73 4a ce ea 75 16 76 00 62 86 c9 13 c6 de a8 2c d8 38 ce 7d a7 ed cd 1f 92 5f 9a 3a bc 90 c0 cd eb c6 ac 5b da 9d b7 f9 f3 44 58 cf e5 cb 25 ab 99 18 12 5f 27 40 c7 39 f3 fe 29 78 a2 91 1d 14 fa 72 0d 39 03 19 3f fd d5 a6 8e 7b bb 62 55 ff 00 85 1b 60 86 dc 2e fc 0f fc 53 59 a4 b4 2d 5a 5f 4e e3 47 ab 22 6a 23 03 40 27 4f df 8a b3 0f 42 1d 27 28 b9 d8 9a aa 46 b1 c6 3d 16 8d e4 7d dd 54 93 a0 7f cf 14 d2 a4 8a 87 d7 8d 16 22 74 c6 01 dc 9e 78 e6 9b d5 4d d8 c0 e1 02 d9 bd 52 17 d6 45 27 3c 83 9f e9 cd 74 56 b3 b8 fc 84 32 ca 52 38 89 cc 85 3f 4f df 6c 8a c4 8e 0d 60 a5 b4 2c 92 00 49 2b b1 03 ce 7e 94 d4 77 61 23 13 5c 92 e7 40 03 40 e7 1c 7d 3f 6a 04 5e 0a 47 13 76 16 ed c5 cc 30 7b 2d 24 2f af 3a ae 1b da cd f0 3e 3f cf d2 b3 e2 b8 4d 4f 13 b9 72 d8 52 54 64 02 0e c7 51 e3 7a 56 da 4b 8e a1 2b 00 98 54 18 d1 a7 24 8f 19 fa 53 96 51 c4 d3 08 c0 91 23 1f e9 1b b9 ec a3 c1 fa d2 86 86 8c a5 76 e7 3a 82 d4 b4 85 65 b2 77 b8 9d a1 8f 03 57 a8 f9 00 1e 08 1c fe f5 16 f7 37 4f 6d 1d bd ac 32 18 22 c8 67 8b 4e b6 3b 9e 48 c0 ed da 87 7d 75 1c c8 9e e7 c2 7b 56 47 00 be 7e 40 1e 33 b0 fa 9a f4 5f 9c 16 cd f9 79 7d 18 5c e3 53 b8 4f 50 01 d9 7b 0f 9e 4e 6a 04 58 b7 7e 6a e0 86 9a 67 61 db 93 fd 26 ed e6 2e cc 26 99 2c 53 51 ca 9f d6 d8 1b e5 bf e7 7c 50 a6 86 da 38 19 ca e9 5c 64 49 23 e6 42 3b 10 bd 87 8e f5 4b 98 ad 95 45 aa 2a 06 1b cd 1a 02 db 81 be e7 9a 5e d0 c7 3a a1 96 6d 2e 08 c2 69 d4 57 6f 68 03 b9 c0 1f 4a 01 bf f4 3d fb fa a0 e7 7f c1 16 7d fb c5 21 19 67 16 d2 95 83 d3 8f 23 53 8d f3 e0 78 a6 2d d2 39 6e 7d 59 5b 7f 4c 11 1a 83 23 20 f3 f1 9d b6 ec 28 66 f2 c2 43 35 b3 4a d0 2a 9d 4c 54 7a 8e e7 1c 93 9c 03 4b 5c f5 1f 73 5b 5a db a8 46 00 b0 c7 3f 24 9f df 6a a6 4e 00 a5 2a 0d c9 ca bd d4 01 15 95 99 12 31 fa 70 f9 25 bc 6c 71 fb 9a 49 d9 24 95 93 d4 58 8a 0d 2a a4 83 93 f2 78 ff 00 03 e6 a0 bc 37 37 10 47 2c 69 a5 4e 09 62 71 bf 72 73 fd 3e 29 59 6d e5 6b bf 49 22 90 2b e3 d3 79 08 01 87 62 73 e6 9a c8 c1 5e 6b 01 18 42 ba ba 69 ae 12 39 63 f6 02 07 aa 49 1a 87 ed c5 4a 5f 95 9d 9c c5 2e 98 8e 15 b7 3b 7d 30 3f 7a 3d e2 dc a1 8c 5a 2b 4c ba bd 3d 6a 9e dd 7d c0 c6 ec 28 57 a0 fa 50 45 74 d2 ac c0 fb 62 8e 02 99 ed 92 79 6a 5d ea db 2c 51 09 9f 5e 25 8f d4 92 44 89 31 9c ba 9c 2b 76 03 1c d1 6d a4 2e ba 43 c8 ef 27 0a a9 81 fe f9 ac 99 e7 82 7b a4 8f f3 4c 60 41 80 d3 2f 07 e0 0c e0 54 5d 4d 6a 26 f4 c2 4a e1 00 04 c8 77 fb 60 f1 47 c4 b3 84 86 0f 45 b1 1b a9 1b 0d 40 1c 67 82 3e 33 db eb cd 55 b4 95 f4 e1 79 0f b7 fe e1 52 37 f8 ef 51 1d cc 12 5b fa b1 33 7a 63 03 2c 00 35 66 11 b9 0a ee 40 3d d4 ef f6 ab 81 79 59 09 23 a4 85 ef 71 55 06 43 9c 00 48 e4 50 ee 11 5f 00 21 60 0e c0 9c 01 f2 71 56 d6 a3 48 3a c1 3b 00 c3 73 8a 96 21 41 27 81 cd 35 04 01 21 51 c8 51 93 be f8 00 77 af 36 06 fc 57 8e 15 b2 5b f5 60 01 f3 56 66 0b b2 9d 9b 6d fb f7 a7 b5 e5 f3 f0 aa e9 8c 00 d9 e6 bc e0 c6 da 54 d4 0c a9 d4 9c 76 a6 24 b6 50 8c c8 e4 e4 64 02 33 9a f9 fa 24 61 7d 49 20 1c 94 b6 32 32 4d 57 9a b0 6c 0f 68 db eb 56 05 b3 90 08 fe 94 02 63 85 55 38 1b 55 f0 d8 03 07 e9 47 48 81 c1 c6 e7 92 78 34 10 0e a2 34 e3 06 89 e9 16 83 3a cd 05 e5 1a 81 cd 46 08 1e 69 a8 21 d7 9d c5 0d a3 65 6c 36 de 31 de a0 c9 9a 5c 41 5b 26 d2 c8 18 d7 00 82 35 67 83 9a b0 47 27 01 49 c5 10 46 de 77 a6 a2 0f 8c a9 6c 8e d8 ad 11 b9 af 34 0a c7 34 6f 88 5b 82 5e 14 fe 37 a7 22 3e fb 61 77 3f 6a 6c 46 59 b1 21 18 04 44 df c4 05 be 80 78 da 85 33 6b 75 0c 08 3c 67 4e 31 4e 22 34 d0 49 27 a0 81 63 c1 92 65 5c 68 1c 01 b6 db 9f b9 35 a1 a2 8d 2c 8e 71 e5 05 17 5e 63 28 23 1c 69 5c 61 88 ee 73 4c c7 3c 4f e9 ac 99 58 19 c7 a8 90 9d 25 fe 77 fd 85 79 ad 55 25 00 c9 1c cc 54 10 22 70 79 e1 49 db 26 86 f1 b5 bd c2 09 23 4d 47 50 3e a8 f6 ff 00 fe 4f 04 7c d5 42 99 45 b8 96 d0 5e 33 46 a5 ad 83 65 04 e7 df a7 e7 15 e9 6e 20 68 e3 31 c4 d1 a0 4c 12 cd a8 bb 78 5f 00 76 14 0b 67 96 d6 41 28 78 c8 42 da 72 a1 c6 7e fc d1 d6 48 91 df 42 3d c2 37 e8 2c 98 39 3f 1b f7 ed 44 14 a4 0e ca 5d 6d a6 27 d5 17 4f 21 8c ec a1 40 56 1c 0f a6 3c 0a 20 55 8e da 2d 2b 1c bb 06 9d 42 71 e0 67 b8 fa 7e f4 b5 d4 96 f2 ce 56 dd 25 8d 71 87 43 9f 6b 78 c9 dc ef 4f 5b bc 16 70 c8 63 ba 31 c8 f1 69 91 a4 19 18 ee 8b 8d c9 3c 76 ef 44 11 ca f1 06 80 4b db 5c 9d 53 ca f3 c0 8c 5c 01 02 af 23 e3 6d 80 fa d5 67 5c 48 86 79 64 91 4e 74 94 38 d3 bf 62 70 3f 6a a5 a0 85 92 45 91 48 60 3d 8a 36 cf 8c fc 0a 95 8e 39 2d 4b ce f2 47 90 4c 7e 1c 8f 07 c7 fe 68 83 d2 81 03 76 11 ad ed 0f e6 0c 2d 71 14 16 e4 67 2e e0 f6 cf 23 bd 0e 14 fc cc b1 25 b4 45 59 db 0b 80 06 a3 e4 e7 61 54 82 68 09 d1 74 24 67 52 34 fa 65 70 07 7e 79 34 cb da c7 68 82 3b ab 36 57 b8 c3 21 d8 90 99 ec be 78 f1 46 fc 90 a2 39 44 ba 6c 59 83 1f a6 53 d4 c3 39 20 33 37 72 3b 91 f3 c6 f5 e8 44 d7 61 61 5b 84 d8 65 14 20 cb b1 ed f3 f7 aa c8 d2 49 15 d2 74 cb 52 96 ed 84 25 80 2e 47 d7 9c 9d ce 06 d5 2b 6c e8 d1 59 b4 49 6d a8 7a ad 23 be 4e 9c 6d 9c f0 39 38 f9 a6 dc 94 b4 00 bd 1c ad 14 be 95 a8 98 ce 32 ad 8c 05 62 76 db e3 e6 ac 22 b8 37 bf 95 04 49 2a 92 0a a7 09 8f 9e 33 4b c3 3c 29 71 2b 43 09 91 dd 4a a1 7c e3 c0 3f 3f 4a bc 9d 3e e5 20 22 77 58 42 a8 2b 83 8d 60 fc 7f cd a8 d9 4a 40 ef 84 54 92 39 49 58 a5 48 e4 55 0a 8a 83 3a b7 e4 9e de 6a 2d c4 70 36 89 4b 48 75 6e a8 77 03 e4 d5 66 b5 16 56 f6 da d9 7d 59 97 5e 9e 02 8c e0 12 73 c1 df 6a bc 36 f1 86 88 5a 47 31 d5 ec 62 ca 4f a8 fc 80 3e 83 1b 53 02 83 9a b4 4f 4e b8 2c 55 40 01 86 b5 08 fb 38 ce 06 3b 9c f6 f3 45 b6 b1 8c 33 fa 8c c3 03 2e aa 35 33 11 c8 07 c6 2b d0 5d 1b 57 63 2c 84 dc 46 c5 48 21 49 00 73 86 3f cd d8 78 a3 9e a0 67 00 bc 8a 21 0c 7d 38 54 e9 6c 1e 41 c7 f5 27 7a 36 ee cb 39 c0 ca 99 ed 4c 41 58 47 24 3a 10 bb ea f6 ed 9c 63 1c fd cf 39 a7 2c e7 92 09 56 6c 2b 46 91 83 22 c4 76 c1 d8 06 ed 9f 8a 02 b4 77 0e b7 10 aa 82 06 58 3e f8 c7 00 0e fd f0 bf 1b d0 93 d3 92 32 93 bc 8a e6 4f 6a 03 c6 78 2c 07 3c d2 f2 28 a1 7b 5d 61 69 4b 73 2d e2 32 24 71 5a 40 ac 64 c9 df 27 be 45 0e dd 7f 30 65 5b a9 d5 fd 60 d8 21 0e a6 c1 fe 52 78 03 be 3c d5 55 a5 58 e3 d4 1d 65 9b 38 d2 e3 32 0c e3 27 3c ee 76 3f e0 55 6d 65 f4 da 59 24 39 d0 a1 55 5b 70 37 3b 0f 1f 27 f6 a4 aa 1d 28 97 f5 5b bd fb 09 94 98 40 b2 c5 00 0a 3f 9e 53 cf d0 1e d4 8b 3c 6f a8 ab ac 51 b2 67 25 b6 c1 3c 1f 93 e3 6a b1 6d 41 66 8d f7 24 f0 00 1f 27 6f bd 67 75 19 a3 8a d5 b1 1c 72 47 24 9a 55 0f f3 ed fb e7 7e 78 14 40 a5 30 4b fa 55 ae 26 11 40 1a 39 c4 62 0f 73 38 41 fa 73 b6 07 73 93 e2 94 76 b6 82 d0 bc b1 dc 8f 55 f0 b2 31 cb bb 78 c1 3b 79 3e 38 a1 cf 24 76 71 c6 d7 8f ea dc b8 1a 22 07 08 83 3c 9c 7e c3 b9 a3 dc c9 12 c5 35 e4 d0 39 b8 25 1d 5b 3a 4a 8f f4 a9 39 c1 23 ef b5 07 3a 89 a5 a1 8c a0 2f bf e6 bc 2e 44 81 95 ef 4c 3e 99 c4 51 ca 99 58 c9 e4 b1 23 27 cf 1f 6a 44 cf ea 99 ad a3 ea 33 5c 16 db 52 45 ed 71 f3 9d f9 db 7a 37 ac 12 01 34 b3 8b 74 b8 0e ae b1 46 1e 42 3e 0b 1c ef dd 8e 29 4e 81 67 75 73 d4 55 61 9d 61 d2 75 67 93 b7 80 2a 45 d9 5a 1a c1 57 dd 36 b0 c9 6b 1c d0 9b f4 8a 78 06 ee 24 62 30 46 40 18 1b 13 9d ea 23 bb bd b1 b4 92 e6 4b c6 13 1c 46 b1 14 3e a3 0e fb e3 da 31 de a3 a8 f5 30 c2 18 c5 cc 58 54 f7 ac 19 e7 39 19 3c 13 f4 ce 3c 9a c9 69 bf 31 2e b6 b9 9b d4 76 d9 9c 12 71 e4 9a 52 e4 cd 61 ee 99 96 77 bc 92 17 16 a9 1c 6a a4 00 06 00 f9 27 bf d4 d5 1a 65 f4 c8 8a 5f e2 1d 8a aa 67 ef 9e df 6a f2 fa 30 db ce f1 bb 5c 46 92 2a 2b 32 95 ce 47 fa 7c 6d de b3 8b 38 62 fa 74 9c e4 fc 50 0f a4 e2 3d c4 fa 2e 82 ca 48 d2 de 38 fd 33 2a 84 06 40 40 d2 87 27 8f b7 35 a5 22 67 49 56 09 a0 64 36 01 c5 60 a4 e7 d0 11 c4 49 0a 33 ce de 72 69 fe 97 74 5a 35 47 61 b9 c2 0f f5 1e 49 ad 71 ca 1c 76 ae 74 d1 1c bc 27 e3 8c 46 32 41 0c d8 27 56 73 fe d4 50 01 f6 9d 9b 8d f8 fb d5 32 0e 49 35 55 60 e3 23 38 f9 18 cd 68 f4 59 39 ca 93 83 91 b1 15 53 8d 59 d8 90 08 07 eb cd 4f f2 96 ed 43 c7 b9 8e 4e fc 7d 29 a9 10 b8 98 02 96 60 79 23 6f ad 49 65 8e 59 30 b9 29 b8 c9 e3 6a 02 92 a7 23 7c 53 52 c4 19 a4 90 67 de 9b 67 cd 70 1a 6c 2f a7 78 a7 67 82 93 2c 5d b2 28 aa 98 46 cc 87 6e 07 9a a0 d2 a4 05 c1 cd 5c 1c ae 29 5b 84 ee cf 0a 44 87 6e 71 57 07 5e 35 12 07 91 42 cf b8 64 2e 31 c1 35 68 92 42 7d ab 9a f6 ef 34 36 67 0a d2 82 18 10 72 3f c5 39 6e 75 46 33 ee c5 2a 58 38 2a 71 90 36 c7 9a 2c 05 a2 93 0c 35 29 07 25 78 20 72 7e d5 0d 4c 65 ec b6 ad df 0e 9c 47 2e d7 9a b4 fa 42 92 ed b6 fc 55 25 b7 68 ce 08 2c 99 a2 44 ba 86 a5 60 71 e2 9e 46 06 31 ea 6f b6 f5 c8 f1 1c c3 61 7d 31 85 92 b7 6b 82 c7 77 08 ec fe 90 6d 5b 0c 67 03 e3 14 71 1d aa bc 29 23 c9 6f 19 51 ae 62 ba f0 dc 9d 20 1e db 0a 66 f2 cd 41 06 21 ab 50 d8 79 ac e6 84 e1 cc 23 f4 0f 70 67 dd b8 1f f3 e2 bb 7a 3d 50 99 b4 79 5f 29 f1 2f 87 9d 2b f7 01 d2 53 a2 f6 e9 ae d6 eb f8 33 05 39 8f 54 43 46 47 62 bc 63 15 59 65 90 dc 43 25 d3 99 35 67 42 81 fa 46 4f b5 41 e0 78 a5 97 0e 08 0b 1b 64 60 85 d4 02 80 7c f7 35 6f 55 a3 9b 4c 12 4b 1b 82 ac 11 17 60 c3 be 7e 2b a1 7d d7 26 bb 2d 1b 15 91 6e 1d 49 31 4b 11 0a 10 c6 35 28 e4 ef c0 c7 93 bd 51 c8 b1 22 f6 d6 59 63 51 b6 84 9b de 1b 70 5c 60 6c a0 fd cd 22 92 dd 40 f7 0a 4b a7 ac 19 59 b5 95 0d dc 82 47 35 68 a1 48 c4 62 79 c4 8e 77 68 94 7b 55 71 9d d8 72 7e 28 93 78 43 6d 65 37 1c ed 34 6e 8a ad 74 b2 6a 3e 92 10 1f 8f d6 e4 02 71 ce d9 a5 5b 4a c3 1a 15 6c e7 27 e4 7c 1f 15 65 7f 4d 48 17 02 1b 69 c8 57 31 92 4e 93 be 34 f7 03 c5 7a 47 48 4b 49 1d c0 68 d1 b4 2a e9 c3 38 f2 47 6f a5 1b ce 50 af 25 58 a2 58 48 3a a1 2c 72 a5 59 b6 5f a9 a8 b9 9e 72 e9 0b cd 1b a6 31 ec 6f 6e 3e 3e 33 fb d0 46 94 b6 91 82 1f 7f b4 16 23 2a 3e 94 48 8c c8 75 85 59 7d ba 54 b0 dd 33 e3 34 2f b0 4d 5d ca 6a e2 7b 7b 58 8a 5b 18 de 6d 38 77 18 20 64 0e 3e 7c d5 20 11 34 00 4a be c2 73 af 96 1f 02 96 99 a5 ba 68 4d c0 54 4c 69 40 ab be 33 fd 7e b4 49 23 6e 63 3a d5 49 1a 5b f9 57 eb c5 30 71 24 94 a5 a0 0a b4 5e 97 84 4b 89 e4 95 d0 aa 1f 48 00 4e b6 ce 30 7e 31 9c d5 d9 c3 d9 b4 ce 57 d4 92 5d b5 b7 b8 ed fe 9e c0 79 fa 55 7a 68 8a e2 e4 c1 75 74 b1 db ed 89 49 c0 8c ff 00 9f 18 ef 4c 74 ef 44 dd 3a 49 e9 a4 00 37 a9 34 ab be 81 bf 07 b9 c7 f5 c5 16 e0 20 ee 78 43 b6 79 2f af 54 07 01 b4 e9 d4 e4 28 45 03 93 e3 15 e9 26 37 17 ac 96 e5 e5 1a b0 82 4c 86 60 06 35 1f 1f 4a 5d 59 ee 23 1a 57 48 ce 08 1b 6d ce ff 00 f8 a6 6c 44 32 4e fe bc ed 12 b8 22 3c 6d a7 b6 a6 db f4 8a 60 4a 52 2a d5 6e bf 2f 1d c0 83 51 98 a3 61 5f 04 64 f7 db 3e 7f b5 33 24 b7 71 41 0c 8f 34 6a a0 94 85 3d 4c 10 79 24 0f 07 6c 9a cf 8c 31 63 95 6f 77 e9 d0 06 58 8e 29 a4 50 59 92 ef 52 ac 4b 90 1d 09 69 64 f1 f4 cf f9 a2 1c 81 14 af 6a 66 9e 40 21 47 d4 cc 01 43 8e 68 9a a4 13 7a 4c ba 5f 3b 82 79 df 7a bf 4e 8e 6c 4d 24 c5 82 46 81 e5 c8 3e d5 ed 8f ae c0 51 12 7b 49 e4 92 7b e4 48 9a 45 f6 a4 2b 93 0e 38 d2 38 ce 06 09 3e 4d 38 79 52 2d ca 6d 26 8a dc c4 4a 09 1f 19 75 ce f9 cf 6f e9 46 97 f3 32 2d bc 4a 22 6d b2 02 91 95 04 f2 df ef 59 16 d6 84 db c9 72 f3 11 a4 80 10 6f ed 27 7c 13 f3 e2 9e b5 84 7a 52 6a 76 01 77 d3 e4 67 60 07 7e e4 9a 6b ee a0 e6 06 fa a7 a0 99 20 ba 68 e5 47 b9 68 f2 07 a5 26 15 88 1f ea 1d be 94 a6 96 99 99 a5 29 03 3b 1d 31 af 27 ce e7 81 f5 ad 38 2d 7f 2d 07 af 23 46 92 63 22 06 6c 92 a4 6c 30 3b 1f 9f 1b d5 23 86 d9 ae ff 00 89 24 92 a0 dc 7a 71 02 1f 07 c1 3c 67 6f 9a 50 f1 ca 05 a4 50 aa fb 28 8e 38 84 2a 82 25 27 24 9f 76 e7 fc 71 da a2 e1 57 d1 24 08 93 f9 88 60 08 51 c8 27 c6 c0 fe f4 78 da 56 92 65 69 04 4b 23 06 95 b4 64 81 9d bf db 15 ce 75 db bf ce dd 18 6d f1 e8 47 b1 2b c3 11 fd fe a6 91 f2 6d c9 5e 86 03 33 80 09 1b b9 ac 92 44 36 51 b9 70 3d d2 b9 c9 66 ee 40 ed 40 d5 34 c4 34 85 9b 18 dd ce 68 d1 da 36 42 85 39 23 20 62 ae fa 22 8f 62 09 61 c7 71 fe d5 84 cd 66 82 ef 37 49 b5 b6 e4 09 15 8b e3 25 dc f6 e4 fd 28 d6 77 51 d8 4c 64 b9 b7 12 e0 10 22 90 90 09 1f ea 03 7c 66 ac 6f 03 33 cb 74 93 7a e1 42 c4 62 22 35 5c 79 c0 d8 01 e3 cd 06 ff 00 a9 dc dd 40 d0 c8 61 54 77 0e 55 17 92 36 19 27 73 81 c6 f4 f7 4b 39 6d 9c 0c 24 64 91 6e 2e 5e 41 17 a6 8c d9 08 a4 90 a3 c0 26 a5 94 bb f0 50 82 36 f2 3e 29 8b 78 65 40 9a 8b a9 2c 4c 44 60 60 f9 a3 5f db 98 65 13 ab 2f a7 32 6a c6 e0 a9 ef 9c f1 93 48 48 ab 0a 8d ad db 4a 3c 91 5b 4b 6d 29 b3 98 61 c2 a6 97 52 4e 47 60 7f cd 21 0c 6c ac b2 19 34 77 00 8c 93 43 12 ba e0 23 6a 6c 83 a7 3b 78 a3 6a 0c 00 75 c9 00 0c 0e e6 bc e7 da 02 27 30 11 77 69 88 fd 06 62 27 d6 01 d8 3a 9c 6f f3 55 b7 99 a1 90 b9 6d 91 74 a8 c7 9f 14 ac 9a e3 72 46 59 80 dc 0e 31 54 f5 35 0c 9d 39 db 02 9d ae 34 08 50 74 3c ae a6 d0 c8 62 52 e5 08 23 da 14 e7 6c 79 a2 13 59 36 5d 40 a4 4b 1b aa 85 50 46 9c ef 9a b1 ea 4d a0 96 50 0a ef 91 c1 1e 2b a5 1c ad a1 6b 9c ed 24 99 70 18 5a 67 fb 54 13 9c 6c 36 a4 e0 bd 42 ae 65 7d f6 20 01 9c 03 db 6a 33 5c c2 a7 1a c1 39 c6 06 e6 a9 e2 32 ae d4 cc 32 35 db 69 70 e0 1e f8 1f 5a 70 1c 47 91 b9 c1 1b 8f eb 49 b6 36 cb 12 73 c5 36 87 f8 6a 09 c9 c1 dc f6 ae 0b 0a fa 29 87 09 75 40 d8 d0 4e af 07 bd 5b 4b a6 c4 81 f4 ab 38 70 35 01 b8 ef e4 50 5d 89 24 e6 83 80 45 a4 da 20 2b c2 63 3d f6 ab 09 3f 94 67 ed b5 0c 30 55 c1 c1 6f ed 55 2c 0b 63 24 af 9a f0 28 b8 65 3d 10 42 9a 57 0a fe 48 e4 fd 7c 55 e1 2e 64 31 85 d5 af 0b b3 63 07 3d ea 90 85 e3 df 26 53 0a 0a e0 02 79 23 e9 e6 bd 72 a3 5a bd b8 01 5b 0b a7 07 20 e3 fe 7d ea d9 e5 67 c5 90 8e 5d ed bf 86 82 36 d2 c4 65 54 9e fb 6f df fd a9 d8 26 59 46 31 83 dd 4f 35 9d 6a 27 ba b8 48 61 56 95 a4 70 98 ce 32 4f c9 e0 e3 bf 6a 6f d3 94 43 77 7c 91 aa db c1 26 8f 4b d4 ca a1 3b 0d 24 fe a3 fb f9 ac 7a 8d 20 98 ee 06 97 57 43 f1 27 69 5b b1 c3 77 d5 68 33 01 6f a4 0d f6 1c ee 47 71 fb 52 13 23 2a 6b f4 d1 dc 64 90 57 00 f8 18 a1 bd c4 ce 04 f1 c9 18 89 db 1a 0f bb 4f c6 6a b2 4b 70 d0 c7 27 e6 11 5b 56 59 02 9c a0 1c 12 7b fd 2b 24 5a 39 60 7e eb 0b a5 37 c5 34 da a8 8b 0b 49 27 b7 b2 83 1c d2 ae 89 0a a2 b4 2d 80 a7 3b e7 b6 3b 77 a7 25 51 35 bb ce 3d 51 72 1d 55 44 78 08 ab e0 77 db fa 52 d0 fe 5e 39 a7 69 c1 91 98 90 8f a8 a9 1b fe ac 7f e7 8a 69 24 f4 d6 4b 76 9a 09 60 58 ca 24 8a 87 da 49 c9 2b 8e 4f 6c 9a ed 34 de 17 ca bd a4 51 aa fa 2a 7e 56 5f 41 4c f1 ca b0 33 91 1a b1 00 31 03 7f 9f bd 03 f2 f8 8b 2b 06 a0 7d e7 27 f4 af 6d fe 6a 59 ee 20 9e 10 b6 c9 1c 9c 8d 47 2c db ec 4e 4e df 7a 8c b4 aa eb a7 01 b1 a8 03 9c 91 df 3f 5a 12 4a d6 0b 72 a4 10 3e 52 43 3c ad 7b d3 31 c6 15 23 47 98 9d 20 2e f8 cf 8f 27 fb 54 34 4f 14 6e ec 98 08 da 5d cb e7 2c 7b 7d be 2a b1 7a 90 8d c3 e8 04 10 46 df 4e 28 b7 8a d7 2f eb c6 15 95 d8 2a 85 5c 04 c0 03 18 f3 fd 69 c9 0a 60 1b 44 58 e1 92 df 5b ab 16 ce f2 b3 91 ab 1b 90 3b 13 c6 d4 07 36 f3 4c ce 18 46 d2 3e c8 72 c1 17 eb dc ff 00 bd 31 32 7a 6e d1 2c e6 79 62 c2 c5 e9 11 e9 a1 e5 be a7 e9 fe 2a d6 b6 52 5e b4 50 c3 6c b1 4a 5f 0f 34 af a4 b1 3d cf 85 18 af 12 09 a4 1a d3 56 82 af 3d a4 c2 59 16 3f 50 00 c0 49 ee db b7 ff 00 55 2d 7b 31 b5 b8 b6 92 49 16 37 71 23 ab 00 0b 9e d9 fd e8 be 85 c2 dd c8 90 3c 77 7e 93 93 ad 37 59 31 e0 1e 77 ed de 96 bf b8 9a e2 67 b8 b9 21 9e 63 ab f4 8c 1a 24 e1 00 2c d2 a3 c4 22 64 04 b1 2a ba 9b 0b c6 fb 8a 37 ad 1b 1d 6c 16 30 4e c0 0c 92 71 cf 8a a4 b2 ca f0 b0 93 f8 8e 74 e6 46 1e ec 0e df 5f 9a 94 98 2c 41 23 50 03 38 27 be 71 fe 39 a2 0d 1c 2f 10 48 ca 66 ce f2 5b 19 18 aa 46 64 78 d9 55 db 71 18 6d 8e 3c 9c 64 52 cc 8e b0 bd c2 bb b2 07 55 f5 7b 03 b9 0b f3 44 48 52 58 26 67 75 02 15 ca ea 18 d6 72 36 18 ff 00 9b 55 94 06 58 92 30 c3 40 25 81 d8 6a f2 07 d3 6c d3 72 52 d8 0a 2d 26 58 25 f5 1e 3d 72 28 c2 e3 3c f7 3b f7 ad 5e 9f 3c f7 dd 59 64 89 5d ae 88 58 a2 59 58 1d 20 0e fe 00 1b f8 de 92 8e 18 cd dc 50 99 96 65 f4 f2 c2 31 82 18 9f d3 93 f6 df ff 00 15 68 9e e6 c2 59 a0 84 fa 53 20 61 33 42 75 10 07 3b f6 1f 22 9c 29 b8 02 56 c1 59 3a 92 34 57 57 21 27 92 51 80 a3 da ca 36 00 0d 80 00 64 ef c6 d5 99 12 5a 24 a7 f8 8c a8 07 0c d9 d4 dd c6 de 7f fb a0 da 9b 99 da 38 e1 8c cf 23 0c fa 69 b9 3e 49 3f 34 c1 e9 57 16 b1 fe 6b 36 c6 52 fb c2 1f 2c 99 3c 11 8f e9 46 c5 e1 25 1a 36 51 ee 6e 85 cb 82 b0 2d ba 63 4b 84 00 e4 ff 00 61 f4 1e 2a e9 71 70 a1 86 bd 44 64 2b 0d f8 e6 99 1d 2e 58 d8 bb 32 4b a2 2f 51 fd 39 00 45 cf 3c e3 7e d8 a8 69 04 ff 00 c4 b8 68 c3 32 e8 8d 12 3d 3a 07 66 38 ed 55 69 1c 05 9e 4f 50 8b 1f 53 95 6d 92 d9 55 34 67 25 71 cb 7c e2 9d 99 4d dd a8 37 0c 0c ea c1 61 0a 70 e0 76 00 01 81 bf 9a 54 46 dd 2e 09 63 78 9b d5 65 f6 a1 5c 82 1b 92 3e 70 0d 51 66 96 d6 65 92 36 f4 93 46 14 a2 9c 9d b1 9c 8f f9 bd 2e d0 72 12 6e 2d 34 6d 33 d5 24 92 da d4 23 45 27 ac e0 85 ce 03 16 6d 86 dd 80 c7 f4 f9 a4 ac ed 57 a6 ac 73 f5 0e 9b 0c c9 28 02 35 79 ce a1 f2 54 53 d3 47 69 3b 5a 99 3a 8c 96 e1 17 33 4b c9 07 80 a3 03 6d a8 5d 41 a0 8f a5 dc a5 8d d4 51 46 d8 ff 00 ba a4 dc 4c 3c 93 d9 7c 56 69 41 38 5b 74 a4 30 13 fb a5 87 4e b9 ea 49 71 71 6c 2d ad e3 8d 89 d4 ed a1 50 1d c0 03 9e d5 ce ae 85 d6 d3 39 d4 3b 13 b3 6f fd ab 4d fa 57 51 ff 00 a6 fe 75 50 45 6c 48 5d 52 36 9d 59 f1 9e 69 2b 8e 93 3b 2b fe 5d e3 31 5b a9 7d 47 21 a4 3b 70 39 27 3b 01 f1 9a 9e d6 b7 85 a1 d2 ba 4a 0e c2 cf ba 5d 11 2b 2d d2 b9 94 9c c6 a0 e4 28 ee 7b 6e 78 1f 15 7b 25 2e 8f 1e 98 c4 b2 2f b1 d9 75 31 ff 00 da 3b 0f ad 27 90 31 9c d6 b5 85 bf a9 79 18 93 52 e9 20 b6 06 4a fc 1f 9a f0 00 f2 99 c7 6b 51 fa 5d 95 cb 4d 17 ad b1 52 48 00 e7 ff 00 f4 7c 0a 37 53 bc b4 33 c4 6e c2 ca 22 05 74 a9 d6 07 3b 9f a9 f1 4e 47 79 0c 7d 4a 7b 8b 04 0d 0a 00 03 dc 13 ab 38 dc 80 38 de b9 cb ab 69 e1 29 33 e1 84 f9 7d ce e1 b9 20 fc d4 a9 ae 22 b8 4a c6 17 cb 6f 29 50 e5 24 25 97 01 b8 14 c4 8a ca 8a cc 18 1f 19 fd 3f 5a 11 c0 2a ec 46 a1 b8 c5 4b 6a 2d 91 c1 1d ea 9b 45 da dd e1 ba e9 48 d2 0e e3 24 e3 7c f1 52 1b 43 02 ea 4c 79 c7 3c 9a 16 70 31 8c 6f fb d5 49 3b 83 93 f1 4c 1c 02 2f 86 cd 76 4e a4 f0 cb 8f 50 00 1b 7e 48 c5 3d 15 f4 71 09 6d e3 b6 12 c3 77 10 42 ba 81 28 c3 f4 36 7e 3b 8a c6 03 39 27 25 47 24 ff 00 6a db b0 fc 9c 5d 31 bd 68 95 ae f7 60 1c 60 63 b7 d6 a7 23 cf 64 ae a1 85 49 22 9a 21 0e 90 72 54 9c 01 80 30 69 19 9d fd 72 0b 3a 96 fd 47 b8 1f e0 53 cb 3c 93 45 a2 59 02 01 fa 49 d8 6a ec 7f 6a 5a e8 2b ce 59 c6 4b 36 a6 d0 36 cf 9f a5 00 e7 11 45 51 d0 d9 14 16 44 c8 03 86 e3 56 f4 40 36 21 8e 14 e3 06 96 60 44 87 7f a5 49 3b 60 b1 d8 6c 09 a9 6e 00 a9 6c 24 04 cc a5 0a 85 ce 8d f9 3f 15 56 45 11 fb 97 75 d8 11 de 96 04 b1 1a 98 d1 95 95 4e 46 49 1f 7c 57 ae d2 ec 2d ca 22 db 07 2b a7 0c 7f d2 3b 51 87 4f ff 00 d4 18 cb 0d 4b fb 1f bf 8f 9a 8b 57 74 de 33 9d 40 8c f7 fa 1a 6a 73 2c 22 23 e9 e9 d5 12 be c7 3b 70 38 e3 e9 54 0d 6d 59 50 73 9f 74 0a 88 d6 3f cb 5c 10 18 36 02 86 07 64 19 dc 63 be 78 fd cd 1a ce de 56 8d 96 07 85 a4 88 fa a4 06 c6 54 0c 92 5b e3 80 3e 4d 2a 61 91 59 a2 52 25 48 99 75 32 12 c0 93 c0 db 6c f2 3f 7a 6a d1 13 f3 59 79 cd ba 47 19 90 7f 0b 51 27 1c 01 f2 7c d3 82 91 c8 13 4a b2 49 2d d3 40 21 49 bd ab 14 67 01 73 df 8c e3 1c f9 35 7b ab 69 2d 52 da 79 e2 2f 0c 9b c6 98 d3 ea 20 38 d5 be fb 9e 29 ff 00 4a 3b be 97 35 f9 88 bb 42 18 33 c9 70 23 05 ce 0e cb cb 1f ee 6b 32 14 89 5d 4c d2 0f 59 a4 0b 86 52 da 17 b9 ff 00 6a 3e 88 8e 2c 85 68 d0 c5 74 e2 f2 34 8d d7 f8 85 73 c0 3b e9 db 8f ef c5 52 ee ea 0b 89 1d e2 80 5b 06 39 58 c1 27 7f 1b f0 3f cd 56 38 a3 85 9e 58 dc 89 95 f3 1a b2 ea c8 ff 00 51 ed fe f4 79 ed 6e 6c de 58 ae a2 56 2b 86 92 5d 78 56 0d c6 fd c7 c8 a5 73 6c 51 54 8d fb 1d 60 fe c9 45 39 ed bd 11 75 28 f6 1c 1f ed 41 d9 5c 85 70 ea 0e 03 81 80 d4 61 bf 1c d7 38 bc b1 de ab bc 23 64 ac f3 05 7a 44 31 ec da 1f d5 1a b6 39 3f 43 4c 42 c9 0c 7e ab 60 63 6e 68 64 1d 05 5c 7b 43 02 cb 8e 68 4f 2b c0 d8 55 60 aa 73 be 32 33 c6 3e 6b 51 8e 3d 43 6d cb 9d e2 cd a2 7e d6 57 d4 27 8a 2c a7 d4 56 c8 3d fc 78 14 5b 44 f4 24 d4 15 5d 0f eb 4e 35 7f bd 2f 04 84 aa 92 08 04 7f 4a 76 3c 11 bf ef 5c 79 26 96 37 91 6b e8 22 d3 c3 2c 60 80 28 a6 ec 97 a2 c1 76 67 0b 73 a8 0c 08 a4 23 48 ed 9d 86 4d 6c c3 71 6b 2a ef 6b 03 29 ff 00 fa c5 73 c6 25 71 86 19 3d 8f 7a ac 6c f0 c9 b1 ad 31 6a 44 d8 77 2b 33 f4 5e 17 e0 e1 74 32 f4 de 99 74 18 c5 13 db 48 41 1a a2 38 e7 e2 b9 9b ee 87 73 65 24 6c 00 b8 b6 d5 85 7e 02 93 fe af 03 fa 56 bc 77 2e 60 77 8e 6c 1d b6 27 fb 53 36 fd 42 4b 8b ef 46 e9 97 d1 68 c0 52 dc 29 f9 1c 11 8e 6b 41 9d d1 11 59 0b 2b f4 0d 91 a4 9c 1f 35 c8 c9 68 e9 73 73 1c 72 ac ab 01 3a a4 8f 75 c0 3b 91 f1 93 54 8c 90 cc c5 01 2b b9 23 b0 ff 00 c9 ad 9e b5 68 fd 07 a9 c5 3d 93 61 31 ae 31 9c 90 33 9c e3 b0 3f 35 8c e4 be 6e 16 2d 0a cc 72 a8 3d 99 3d b1 da ba 31 b8 38 02 17 0e 58 dc c7 16 b9 4c 0d 24 c5 9e 31 a2 28 f7 2e 78 41 f6 a7 ee 12 15 e9 f0 06 b7 5f 56 69 59 9a 4f 53 2e 40 03 03 1d 97 7c fc 9f a5 07 a4 4b f9 42 de a4 ed 14 32 ed 28 50 1b 52 8f e5 c1 db 39 df e2 a9 0b dc 88 25 bb 48 88 49 89 85 a4 ed 82 3f 4e 7c 90 0d 50 71 95 23 f8 b1 c2 69 21 bb 4b 38 ef 19 d3 44 8c c1 64 27 2c da 79 20 78 ed 9a 5a 39 9e 04 98 46 3d d3 06 57 00 e3 6e f8 fa d3 3a ae 6e 6c 5d 19 d5 20 b5 f7 24 28 a4 ea c9 00 9c 8f 1b 73 54 78 6c a6 5f 5a 47 96 0c b7 b9 14 03 84 0b b1 ff 00 e4 4d 35 9a 49 8b ca 8b 3b 9b 9b 7b 66 36 c7 d0 2a 40 fd 65 59 b3 c0 04 73 f3 e2 9d e9 eb ea 4c 7f 34 ce 87 0d ba 91 9d 5f 53 fd 4d 2b d3 3a 75 c5 eb 24 5e a4 50 a2 80 cd 2c b9 0a 9f 7e f5 a9 63 6b e9 75 59 60 b1 b4 17 ea 87 f5 98 b2 1c ae e3 9e d9 e7 ce 28 82 91 ed 07 84 1b c7 31 4b f9 68 6f 12 ea 33 86 01 77 0a 4f 6f 9c 7c 53 31 75 06 b3 30 c9 67 96 91 86 19 ca ec 87 71 85 ec 76 c6 fd a8 2d d3 c4 f7 10 c7 6b 92 c5 31 70 f2 11 1a 07 cf 03 c0 03 6f 9a 89 c5 d0 36 f6 86 d9 51 41 77 8c c7 ee 67 1d ce 7c 6d f1 4f bb 80 4a 99 60 e4 27 ec ed 67 96 dd ee 55 d5 63 5d 45 cc d2 e4 2e df e7 fa d4 af 50 96 45 48 ae 25 3a a3 2a 8a 74 05 d4 a7 b6 df f3 14 84 57 92 c9 1c 51 ea 31 c0 92 16 05 57 71 9c 0c 9a d1 47 fc f4 6d 65 67 d3 51 98 16 df 19 76 20 8f 73 13 fa 47 1b 7d a8 93 dc a9 6d ec 3f f4 af 5c 47 a5 cd ca 80 c9 13 60 36 9c a6 a1 be 31 ff 00 05 4b cf 3f 51 e9 92 5c 5d 60 e8 98 00 d2 28 12 38 c7 f2 fc 0c f1 f3 4a 0b 2b 9b 78 25 69 26 81 dc cb e9 b1 f5 36 db b0 1f 7c 56 8d b3 08 e3 ba 12 21 4b 79 53 44 ab 10 cb 29 ec 72 7b e4 1d bf a5 2b 8e ea 3d d1 8d bb 6d a4 e1 73 fd 66 6f cc 5a 4b 27 53 bc 2d 28 62 b6 96 b1 e3 29 c6 ed e1 71 e3 93 57 e9 f7 37 51 18 e5 8c 4a b2 94 2a 18 ae 9f 69 18 db 3b 8d bb d5 2f 3a 5d 84 1d 4d 52 1b b9 6e 49 4d 44 c8 07 eb f9 f3 f3 46 90 c9 2b 66 46 05 81 c8 e4 93 d8 62 b1 c8 40 5b c1 ba 01 67 2f 4f b7 86 65 97 0e fa 30 4c 65 72 0f de 9b 1b 24 cd 0c 7a e4 20 6a 03 b9 ed 93 de a3 d1 9a e5 64 47 25 08 c8 05 b8 22 97 bc 8c 89 d2 3c 98 a3 62 16 32 08 18 38 d8 91 ce 36 1b 9a 4b 2e 54 64 65 e6 86 55 e0 b8 44 c0 5b 75 89 98 6a 77 4e 1b be 0e 7b ff 00 e2 af 7c 21 96 d0 07 2c f3 69 ca 02 32 71 e4 52 93 5a b7 e6 3f 2e 4b 7b 73 ba 8e fd ff 00 ad 50 4e 97 17 f1 47 a8 84 5d 90 a9 e0 e3 9f be 2b d5 dd 58 42 5a ec f6 48 93 a4 61 c0 60 0e c7 e6 a7 59 28 01 c6 73 cd 1e fd 16 39 ce e7 43 8c ae ad cd 26 d8 0d 95 ce 3b 03 4f bb 0b 74 64 11 b9 11 15 75 0c 9e 7b d5 27 de 66 28 b8 0c 72 17 c7 c5 39 60 ab 22 3e 23 69 18 0c e0 0e 06 79 cf 8e de 69 4b a5 78 6e 1d 59 4a 9c ec 08 ed 49 b8 5d 25 73 81 72 f6 b2 02 ed b2 8c 1d 47 38 fa 78 a6 cd d2 05 0e ab a9 31 dc 91 bf 7c 0f 15 9e 46 b5 dc e3 bd 16 54 92 38 a3 f5 59 57 6c 63 b8 1d b6 fb f3 46 d3 c4 d0 1d 9e 15 e6 b9 62 4b 26 42 fc 78 ab cb 73 fc 31 82 58 81 ee 27 e7 8a 53 da e7 db f4 19 a8 c8 41 b6 f4 2d 6e 2d 37 e8 a1 d0 31 05 7d a3 6e dc d5 0a a9 2e 49 c1 1c 00 39 a3 0f 7a 15 cf 7c 8c f6 a5 ce 55 fb 1f 34 86 97 11 a4 f0 a0 e0 02 74 8d aa 15 f4 90 41 3f 35 e9 4a 7f 21 27 ce d5 4a 03 0a 9c 8c a6 90 eb 27 d3 07 61 c6 77 a3 a8 69 b5 08 48 8f 27 75 df 0a 07 18 ce f9 cd 22 8d a5 83 0e 41 cd 69 82 5a dc 6b d2 a3 3e d2 06 0b 7d 07 f9 af 5d 15 ed a0 85 36 5e af ae 0a 42 27 8a 1f e2 49 1b 12 10 a8 db 53 9f 1b ff 00 8a f4 8a c2 49 8f e6 ed e4 5c 12 24 6c e5 c0 3b 05 1c 8c f1 bf 61 43 9c 31 76 e1 46 01 75 ce c7 c0 c0 aa 26 a6 8d 23 d4 18 12 58 a8 1f a4 f9 f9 34 c4 d0 ca 9b 5b 6f 1b 46 56 95 b9 58 a0 79 92 28 99 e4 f6 bc d2 29 6f 45 4f 2c a3 cf cf 6a 0c 50 db 5c 7a fe bc cc 8a 1c 7a 6a a8 5e 49 06 77 3b 9c 2f 93 f3 81 5a bd 26 5b 6b 48 64 37 1a 5b 52 10 a0 91 cf de a6 da df a7 bc aa fa ca 8c 60 23 1c 05 ef 52 64 ae aa ab 5a e5 d2 b3 78 23 1e fb 2c 9f ca cb f9 b7 36 e1 d6 dd bd aa d2 10 ee 17 e8 36 cd 52 54 92 34 32 4b 14 ed 26 4e 96 93 dc 41 f2 7e d5 d9 d9 33 42 18 5b 98 81 3e 11 4e 7f 7a d0 59 4f a6 56 68 23 62 4f 3e 98 1f da 8f 8b 20 ec 81 d2 c4 78 25 7c e1 23 12 85 f4 63 d3 ed d3 82 fa 8b b7 73 f1 fe 28 90 46 5c 8e e3 c8 ae db aa 5a 74 af cb 19 9e db 4c b8 3a 3d 21 86 27 eb db ef 5c d5 b5 b2 44 02 96 50 a3 93 9a cf 3b c1 cd 51 5b 34 71 39 96 2e da 50 ae 63 22 54 39 fd 4b e7 6a 46 43 1a b4 82 46 2e 37 d2 17 7c b7 6f b0 ae a9 fa 75 af 51 85 52 d6 f6 28 e7 41 a9 43 9f 6b 8f 1a 86 70 73 e6 a8 7f 0c dd 83 fc 64 89 1b 8c e7 20 fd 08 a4 d3 ca 63 3b 8f 05 53 5b 13 67 68 68 c1 1d d7 2e 83 d2 90 33 6a 69 3f 4e 92 7f e7 15 a5 6d 36 b2 51 bf 5a 9d fe 69 c9 bf 0b 5d 44 3d 48 88 38 3f a4 1c 8a c4 b8 b6 ba b1 76 79 a3 74 62 76 20 6c 6a f2 b6 1d 50 ab a7 7e 7f da c7 a7 93 53 a1 75 d5 b7 f2 fe 96 dc 60 96 c6 70 0f f4 a1 cb 87 77 89 93 4f a6 46 31 df ef 59 d1 f5 39 a3 45 2d 18 c9 19 dc ef 8a 69 ba bc 71 ae af 4a 4d 60 0c e0 8d b3 db 35 cd 3a 39 e3 75 81 7f 25 db 6f c4 b4 93 32 9c ea f4 21 7a 7e a7 04 58 8c 5b ba c8 a7 96 7a 3d 97 5b 4f 59 92 54 8e 02 eb bc c1 0c 84 1e de dc e3 19 ef 58 d2 49 ea ce 25 f4 95 4f 3c e7 9f 39 aa 09 5f 49 0a 15 8f 72 7c 76 ae d4 70 30 34 58 ca f9 b9 f5 93 39 c4 35 d8 fb 7e c9 f7 94 5c df a3 5d 4e f2 09 1c 89 64 53 92 47 c6 7f a7 ed 41 b8 94 5a dc 4d 15 9d c1 b8 b6 60 00 3e 99 5c f8 ca 9e 0f 6a 12 a9 91 80 67 c8 cf e9 ee 07 91 53 24 62 27 76 72 d8 61 95 20 7f cd ea de 20 0e db 74 b2 08 9c e6 19 08 b1 dd 79 ed 3d 18 ad de 49 32 67 52 c6 35 e5 46 76 27 eb bd 40 95 9c aa 97 f6 a1 f6 47 c0 5f b5 16 3b 68 a4 85 da 73 22 cd 90 63 d2 01 52 3b 86 ef 9e 30 68 0f 14 a9 96 f4 c9 25 b6 6f 15 e1 23 38 b4 4c 12 11 65 a7 ec b6 7f 31 6b d3 67 03 4c 93 c3 3c 2a 42 16 c7 a8 bf fb b1 b8 05 87 1c e2 93 b9 16 af 17 a8 22 d3 23 b9 91 c2 93 a7 4e 36 50 3e 0d 35 67 15 aa 74 90 d7 0a 24 96 f5 da 3f 59 c9 fe 08 18 d4 e1 7f 9b 9d b3 55 bd 4b 17 e9 50 46 6f e4 92 78 f2 b1 42 91 e1 55 49 c9 2c c7 9c e3 b5 56 ef b2 cc 1b 47 94 5e 9b 73 d4 7a 8c 4b d3 6d e6 82 d2 d5 81 67 27 d8 8c 06 e4 b1 e4 e2 83 7a f2 f4 db 8f 4a da fc dc 23 61 8b a1 60 a7 04 ed 83 cf 9f bd 23 35 eb ca 24 19 c7 f0 96 25 db 1e d0 31 8f da 82 cc 58 60 b1 60 0e 47 f9 a2 13 6d f3 09 db 14 7b bb 97 cc 87 7c 95 cf e9 cf 6c e7 60 29 ae a2 ab 63 72 b1 a5 c2 4e ae 8a c2 45 05 79 19 db 3f b7 f8 ac d8 c9 32 0f e6 63 b8 19 18 1b 73 4c 08 e4 11 34 85 30 81 c4 7a 8e 30 5b 19 a6 ef ca 47 0c ad 3e 97 73 69 67 33 3c f6 9f 9a 70 a4 2a bb 61 41 f2 7c 8a 74 df 43 35 bc a6 0f 59 14 bf fd ac e0 01 8d b3 e4 67 38 15 94 d8 78 d2 de 04 2a 34 fa 8c d2 72 c4 03 b8 f0 b8 ed 57 49 e5 8a 46 80 33 04 74 2a fa 97 70 32 32 07 cf 8f a5 10 e1 76 a0 f6 12 29 33 0d e3 37 a4 27 b4 52 b1 11 ad f2 4b 1d fb 8c e3 38 e2 8d d6 1e 5b 50 cd 0d ba 7a 71 63 d7 d2 4b 68 56 dc 02 d9 e7 70 3e d5 89 2d e1 b4 ba 91 11 96 45 0c 0f a9 82 0b 28 f2 0f 7f 9a 31 ea 36 b7 36 d7 51 3c 3e 9b 49 83 1e 5f da b8 f2 38 fa 1f 9a f5 d7 07 2a 83 4c f3 9d b8 49 75 3e a3 25 cd de ab 67 68 a2 55 0a 06 70 76 ee 7f f1 5a 16 73 45 3d ba 2a 97 2d 19 06 49 24 20 6a 3c e0 01 c0 cf 73 cd 62 93 19 65 56 4c aa 9e 01 e6 af f9 89 d7 d9 09 0b 19 6d 4a 31 9d 1b f6 35 9a 40 5f 67 ba dc 34 e5 8d 0d 6f 0b 69 a7 8e 39 82 4d 3b 67 fd 21 73 ce d4 48 61 fc d4 67 09 1b b4 24 c8 84 31 c1 3e 0e 77 cf 07 fa 56 04 93 4b 21 62 ec 32 48 3c 7f cc 53 7d 21 ee a3 b8 49 60 b7 69 95 5f 91 8e 7c 7c 03 50 7b 4b 5b 82 ba 7a 46 86 60 84 c0 bf 9e 4b c2 8c 4c 71 3a 92 55 94 1c e7 73 c7 6c 50 5a de 68 ba 8c 85 23 3a a1 90 01 ec c0 6c 7d 3b 56 ad c4 28 d3 2c 96 ad 10 0c 49 9a df 48 70 cc 47 73 c0 fe 95 3d 43 d4 7b 1b 6b a4 53 1c a8 34 b4 47 20 b1 04 6e 4f 8f f6 a8 7f 94 1a 5a 00 e7 0b 60 d2 83 7b bb a4 fa a5 e4 33 db bc 53 2c b1 dc ea 04 85 1a 90 e3 6c 03 fd fe 45 65 c7 d3 e6 b9 12 98 57 2c 80 61 1b 66 61 f1 da b4 6e 02 4b d4 23 c3 3b e1 94 90 07 b1 01 fe 5c 0e 4e 73 9a 25 d9 91 6e 0c 57 87 d0 b3 8e 52 8a e8 98 d4 7c f9 c7 cd 7a 5d 41 0d 1b 79 f7 d9 4a 0d 1b 5a 48 ed 6b 32 d9 ae 3a 75 e6 96 1e 9c 85 30 57 3d 8d 4c e9 25 dc e0 92 cf 29 f6 8c 9c d6 84 f6 c9 14 10 c7 71 fc 2d 60 1d 20 02 44 7d 9b 1c f1 be 0e 0d 02 f6 ee da 45 55 b7 8d 14 c0 02 a3 c6 a4 6b 5c 6e 48 27 63 f4 f9 aa c6 f2 e6 d9 19 4e 74 cc df 7c a4 96 c2 65 5f 52 45 01 41 c1 5d 63 57 ed 54 bb 2b ea 7e b1 21 d3 c8 07 6f 8d e8 f7 57 86 e5 e2 6c 60 45 ed 55 27 27 1f b7 9a 05 e8 80 ac 6d 17 a8 b2 63 2f 92 34 9f a5 16 17 57 52 26 26 b0 db 45 a4 88 d0 c7 1e 7c 71 56 c6 a0 a4 2e 0f 7d ea dc 22 b3 91 a5 be 78 aa 31 3a b0 bc 1f 14 53 35 80 7c 95 81 d3 ee 18 0a 37 63 e7 e2 97 f6 ee 73 bd 7a 49 72 a1 54 60 77 35 45 01 9c 64 e3 34 09 b5 c6 6b 68 59 5e 1b 9c 57 88 20 e0 d1 23 8c b1 38 3c 77 aa b8 20 9c 8a f2 6b 04 d2 80 69 fb 19 90 48 a8 eb 93 c0 6f 15 9e 28 b0 b6 1c 63 9c e4 52 bc 5b 53 b0 ed 70 2b 5e 6e 91 70 c0 cf 6a e6 65 e4 a8 fd 5f ef 49 29 65 06 25 50 ce db 6e 48 29 bd 74 9d 1a 62 38 d8 8e 3e b5 eb 9b bb 39 6e 81 bf b6 b7 79 7b 16 e7 fa 1a c2 cd 53 86 1c 2d 74 a6 d0 b0 f5 46 69 66 5b 74 a9 1e 3c 86 d2 c7 39 6d 39 fb 56 e5 97 4b 94 da 18 0c 2a cd ca ca 48 52 0f fe 3e 2a 63 bb 8b 0b e9 a0 53 d8 2f 14 ca 5d 82 79 23 3f d2 b3 3b 56 f2 72 56 a8 f4 b1 30 74 b7 3f 54 11 d2 2f e2 c7 a6 83 39 fe 47 c8 a7 2d e6 bc b7 2a b3 89 17 1f ea dc 51 e2 bb c0 27 56 29 e8 6e e2 71 89 39 27 b1 e2 ae cd 59 53 7c 0d ae 12 17 77 b7 df 95 78 fa 7c 46 59 24 5c 6b 40 06 9f fc 9a c0 ea 1d 1b a9 c3 d3 ad e4 4b 56 29 23 10 c7 6d 41 b6 c7 d8 ff 00 8a eb 64 86 29 5d 55 37 2c 72 06 9e fe 68 17 97 73 74 d0 04 a8 64 b3 46 cc aa 9f ab ef ff 00 9a a9 9b 77 03 2a 42 10 de 4e 3b ae 52 2e 9d 73 d3 26 89 af 63 6b 63 28 cc 4c ad 80 c4 73 5d 05 9f 50 b8 b6 f6 86 0e 17 72 8e 32 3e a2 b9 de bb d5 c7 53 bb 79 e1 46 8a 20 02 81 21 ce 00 e0 0f ef 41 b1 ea ec aa 52 e1 7d ab c3 0f e5 f8 a7 7c 32 9e a5 08 b5 5a 70 4c 7f 9f bf d5 7d 02 c7 a8 5a 48 a0 34 7e 99 df da 77 03 3c d5 ee 2c 60 b8 46 0a 03 67 b1 c1 06 b9 bb 3b 98 a6 42 f1 30 66 ce 30 0e ff 00 ef 5a 09 70 55 7d 48 db 74 dc 81 59 cb 85 53 96 af 0f 36 c2 b0 fa cf e1 c1 16 a7 b5 55 57 63 ba 36 e0 fd 0f 6a e7 e3 b7 13 c6 51 35 44 e0 9d 8f 91 5f 47 96 75 3d 2d ef ee 13 5c be d0 99 dd 50 31 c6 48 f3 b1 3f 71 5c cd ed 8b cf 14 77 f0 47 26 b6 4d 72 2b 2e 0e 33 8c 9c 6d 9d be e2 9b fc 97 81 40 fc bf b4 ad d2 46 e7 5b 9b e8 7f af 25 cc b2 49 13 18 9d 70 46 46 4f 71 57 48 fd 55 d2 07 04 13 db 26 b5 e6 8e 2b 94 09 2a ee 3f 98 72 2a 61 e9 e9 1c 64 09 8b 77 3e dc 55 47 c4 5a 59 9c 39 65 77 c2 4b 65 15 96 a4 6d 6d 7f 54 8c a3 50 db 56 69 a9 1e dc c2 22 65 67 27 c0 d8 7d e9 4e b4 52 29 a2 8e 12 72 ab a8 91 f3 c5 04 f5 22 f6 ad 1c 91 8d 78 c0 75 18 fd c5 45 c1 f3 11 21 fe 16 b8 cc 5a 76 ba 20 3e f9 5a 4b 22 2a 80 aa 07 da a8 67 21 b2 18 d6 5c 7d 44 a8 c3 ae 7e 94 4f cf c2 c3 7d 4a 7e 45 40 e9 e4 06 c8 b5 a3 fc 98 88 c1 a4 eb 4e 64 da 50 18 1e f8 df ec 68 17 c6 dc ac 6d 6d 07 a4 a8 ba 5b dd a8 31 f3 bf 7a 5e 4b a4 61 ec c9 3c 6d 54 91 64 c4 5a a3 75 8e 4d d5 d8 1c 37 9c 1a e9 69 23 91 bc e0 2e 4f c4 24 81 e2 86 5d e6 a9 90 18 67 3b 6f b5 4b 36 0a 9c 91 f0 0f 15 e9 95 75 9d 00 e8 c9 0b f3 55 c9 23 fc 57 4e d7 31 ad 0e 57 1f ab 62 08 3c e2 98 49 59 82 06 60 aa bc 03 dc 9e f4 a8 fd 59 1b 0f a7 6a be a0 58 6b fd 3f 5e d4 41 4b 24 79 aa 4f b1 0c 9e a3 ce bc e8 3a 9b 2d b7 c7 61 8e 28 f0 87 91 57 4c 4e ec 5b 19 53 ee 5d b9 df fc d6 64 d2 eb 2a 14 e5 10 9d 03 c6 6b 4a cb aa 5b d9 db c2 ab 6c 5a 55 62 5e 4d 5f a8 1e df 41 b5 33 08 07 2a 12 c2 fd b6 c1 67 c9 67 5d 0f 4e 51 b3 64 80 48 6e 46 dc 6f cd 29 f2 a4 e9 ef 4d f5 19 cd e5 c3 4c b1 aa ea e4 6a 2d fd ea 3a 7d 9a dd dd ad b9 99 21 52 0b 16 63 b0 03 c0 ee 7e 2a 12 1b 76 17 4f 4e c7 06 0d dc a5 8b 63 1e 38 19 db 15 21 c8 19 ed fd ab a2 e8 f6 d0 74 9e ac eb d5 4c 62 75 45 28 92 28 65 2a c7 0c 39 18 71 f3 f3 4c f5 6b 1e 99 6c 25 b5 4e 9b ae e0 29 c1 b7 0c 51 1c a9 60 35 72 c7 1e ec e3 03 18 a4 a2 b4 57 60 b9 12 cd 9f 34 58 e6 78 49 d1 8c 38 d2 d9 ef 5e 86 26 90 10 8a 48 03 24 8e 28 97 36 72 c7 6d 0c ac 71 ea e7 da 41 c8 a9 92 9e 88 16 11 6c af 23 86 19 03 20 2d b6 e4 93 ea 1c f7 f8 1f de b7 ac ba a4 4c c6 09 95 96 39 b1 a0 86 2d 9c f3 cf f6 ac 08 7a 64 8f 6d 1c ca eb fc 47 d1 df d8 7c 37 8e 31 4d d9 dc 4b 04 67 f3 00 3d af a9 a8 46 23 0d 97 ff 00 1f ed 58 f5 30 36 46 93 56 56 cd 3c ce 00 34 a7 1f a7 3a b8 21 de 37 9a 6f 6a 30 c8 40 4e 33 9e fd be d5 ee b6 92 9b b8 ff 00 88 19 5a 21 84 1c b7 6c 8f f9 e6 99 b0 ea 72 7e 62 38 2e 86 9c 82 cc ae 72 57 e3 3f f3 14 6b 9b 58 58 4c c1 a5 8c 18 f1 9c 07 58 f3 b6 14 67 9c 7e d5 cc ff 00 21 f1 c8 04 81 74 08 0e 16 0a dd ea a4 5e f4 be 99 ff 00 48 5d 50 ba 04 8d 5d d4 a4 87 4e 34 b6 77 d5 db 24 d7 39 1f 4b 9a f2 cc 35 ed d6 0c 73 3a 8b 68 c0 25 3f d4 73 d8 1f 1b d6 55 cd a5 f7 4e 9a 19 ac e5 92 36 51 ea 1d 24 a8 52 3f 9b c6 e2 b6 7a 27 e2 bb 63 68 b6 bd 47 a7 fa d2 c6 4f a1 2c 7b 6e db 90 4e 46 91 9e fc 57 45 d2 19 22 26 23 95 cb a3 0b e9 e2 c2 4a fb a4 44 63 55 b3 01 65 1b b2 bb 6e e3 ce 4f 8a c0 90 67 dc 43 71 81 9e 0f de be 83 d4 64 e9 ef d1 65 59 a5 b6 b8 b9 78 89 40 a4 64 92 38 04 6e 4d 71 1d 46 6b f3 0d b4 57 c4 85 58 ff 00 82 ac a1 70 b9 3d 85 0d 0b a4 0c a7 9b 2b 46 f6 b9 db 9a 28 2c fd 41 d0 87 18 19 d8 d4 7e 85 c0 c9 1c 73 5e 0f 9e 47 1b d4 83 96 dc 10 47 7a dd 68 58 39 05 2e eb b8 18 db ce 28 ad 02 c4 a0 b1 0c 0e db 1e 0d 42 ba 07 db 91 e6 a0 12 76 20 0c 9e d4 bc ae 1f 50 56 2e 19 06 95 39 cf 1c 01 54 99 76 d4 01 f0 6a 4e ac e4 62 ad 86 d0 ca a3 19 df cd 1a 41 00 8c 28 db 7a 2d a9 55 99 75 28 3f 53 50 e8 4a 02 37 d3 b1 a8 8d 74 ca 03 86 18 df 6e 68 14 e0 91 c2 d2 9e 69 84 63 d2 62 a1 86 e1 0f 03 bd 0e 28 e4 82 41 72 a8 cd 18 21 4b 15 c0 c9 a1 a4 ac a4 2e fa 4f 3f 3e 2b 4e d5 e6 9a 27 85 24 c0 23 18 66 e4 77 03 fb d2 6c 6e da 03 08 3e 79 43 c3 9c 6c 84 d2 ba b1 d4 8a 11 f1 ee 42 39 f9 a3 46 e0 8d 89 04 57 3d 71 2c 8c d2 b9 38 9a 26 c1 70 79 1c 73 e7 35 68 6f 2e 9f be ad 3b 67 1e ea c1 26 80 df 49 5d 78 be 26 c2 3a c5 1f 4e 17 53 13 9d 81 34 61 22 83 8d 58 61 d8 d7 3d 6d 7f 70 cc 55 da 25 1f ff 00 6b 60 fe f5 a0 b7 ca a8 4b dc 5b e3 e2 4c ff 00 8a c1 26 96 46 1a af b2 df 16 a6 29 1b ba f1 ea b7 ac 6e dd 59 99 65 64 76 52 11 c1 d8 60 6d fd 68 7d 22 79 0d cb 89 a5 8d 20 d8 ee be e5 f3 93 df 35 89 17 55 42 de 9c 00 c8 fe 14 7e fc f6 f9 a1 0e aa eb 0b 98 23 41 92 33 a9 f9 fa 55 a2 d3 6a 0f fc fd d4 a6 d6 e9 1a 0d bb ed 9f 7f 54 d7 e3 2e 9b 65 04 91 c9 64 e8 8d 29 d5 e8 f7 ff 00 e5 8f e5 cf 8a e6 e6 01 42 23 12 4a 9c 39 03 27 34 f4 a5 a5 0d 24 ce cd 2c 83 25 8e 0e 7f e7 f6 a5 cc 40 09 15 26 8f 29 ee 0b be 58 fc 7d 2b bf 1b 0b 5b 4e 5f 2d 2c ad 7c 84 b0 50 47 2d 75 d3 70 d1 48 a1 08 1a 55 97 50 90 79 20 f8 fe 94 e4 7f 88 35 83 ea da 04 60 37 68 dc 81 f7 07 35 a5 d3 ec e0 ea 3d 35 ad e7 6d 18 00 87 3c 03 48 5a fe 1c bd 69 67 8a f6 16 41 91 87 c8 c3 8f 20 f8 ac a4 c5 23 6e 41 95 d1 d9 3c 2f 02 23 83 f9 23 27 e2 38 64 b7 f4 e5 59 52 22 c3 51 c0 39 f8 a3 5d 7e 29 8b f2 cd 05 9c 05 d1 b1 a3 d6 00 01 f2 54 72 7e b4 29 bf 0a 4f 24 78 82 e5 0e 00 01 5c ed 8f ad 65 75 0e 93 7d 68 08 b8 b5 68 d5 17 67 03 28 7e e2 84 50 e9 c9 e9 46 6d 46 a9 a3 a8 7d 42 1b dd 4b 34 aa 8c c7 1b e4 6a 00 53 76 d2 a9 89 47 1f 19 d8 d6 5b ee 57 24 0c ae 03 7c 8a 94 66 41 ed 70 5c 9f 72 9d b0 6a 9a 8d 30 7b 36 b3 14 a5 a3 d6 98 e5 2f 97 36 b4 7f 24 b3 4c d2 cf 21 62 4f e9 1b 55 ae ad 63 9a 15 8d 00 8f 47 e9 d2 36 df cd 26 97 ac 09 12 65 4a f9 de b4 0c b2 5b b4 62 e2 2c 2c 83 52 3a fb 94 8f 3b 57 39 d0 ea 1a 6f c9 75 c4 fa 47 f4 82 33 f7 59 7f f4 d9 4b 63 5c 7f d6 bd ff 00 4c 7d 40 7a 80 92 76 01 4d 6a ac 8a e3 52 30 1b ee 19 48 34 34 66 04 c8 c7 38 c8 c5 2f f9 12 aa 0d 1c 49 58 ac 63 89 8a bb 86 62 70 a4 92 33 91 9c 7f f7 4c f5 cb d9 af 4d b9 74 58 e1 86 31 14 28 80 80 aa 3f cf cd 0c 4a 0c e5 bd 55 44 03 07 27 9c 50 af 2f 44 f1 08 91 4e 07 2c dc fd 07 81 5b f4 92 4d 79 e1 61 d6 41 06 dc 72 12 27 71 cf 15 64 c6 96 27 9c 6d f5 a8 af 1f 15 d1 dc b9 c2 3f 25 62 77 00 93 8c e4 d5 9d 07 a2 1f 70 a4 e0 77 de a9 ce 33 92 3b e2 ad 28 49 34 3a 1d 03 24 69 c6 ea 07 19 3d eb c0 8a 4b 2b 5c 1c 08 55 52 3d ba 5b 24 93 b7 8a f3 37 3c 03 50 08 4d f6 cd 6f 7e 17 e9 16 fd 41 a4 b8 b9 d2 e2 36 0a b1 13 b7 d4 8a cf a8 9d b0 46 5e ee cb 44 2c 2f 76 d5 89 10 77 75 28 8d 29 04 1d 2a b9 cf c6 d5 d9 a7 4f 8a e6 cd 4d fd a4 96 42 d5 fd 58 56 de 45 60 a1 b7 39 07 38 c1 fb 67 60 0d 6b 7a 51 5b 42 ec ba 42 46 a4 b0 88 67 48 1f 02 80 7a 8c 2a d1 43 2c 0e 91 cc 03 97 b8 1a 14 26 37 3b 9c e4 6c 31 f3 5c d8 75 fa 9d 46 22 8e 87 99 ff 00 c5 b9 f0 c6 c1 97 5a 05 bf 4f b5 ea fd 42 3e ab 65 38 55 dc ce 24 21 dc 0c 0f e5 39 52 30 4e 40 dc 67 3f 15 9f 7f d7 cd c9 9e 3e 99 35 cb 4a f2 b0 8e 0d 02 40 10 0c 1d 38 1f a7 1c 78 c7 1b e6 9c b3 ea b6 96 8f 6d 34 36 5a 84 2f e8 7a 89 23 b9 88 3e 72 31 fc c0 1c f6 e3 8e 28 17 1f 87 63 b3 eb 73 df cb 33 c1 65 0c 8b 30 29 95 0c 30 4b 2a b7 fa b5 0c 69 f1 be 6b ad 67 e4 b2 8c 14 a7 4e e8 d7 7d 2a 48 ba ac 68 d7 02 2c 16 8d 63 20 c7 95 c8 3b e4 10 3c f6 fa d3 d7 b6 d6 86 78 7d 2b 70 a1 48 99 a3 d6 48 75 7c 64 64 78 ce 37 e6 ad 2f e7 3a 95 d4 7d 4b a4 4c f2 4e 98 46 52 19 54 23 6e 79 dc 9c f8 e3 15 b9 0c 69 3e bb db a2 44 b6 c4 ad ca e9 ff 00 bd b6 c0 93 f6 fd a9 5f 41 59 bd 26 ca c1 ea d6 ed 6b 38 9a 0b e4 89 a0 89 13 f2 e4 8d 6c 36 fd 44 f7 df b8 ce 2b 3a 58 66 7b 04 6b 68 64 41 ea 01 2a e3 48 07 8c 8f 0b cd 6c f5 29 e5 33 4b 11 8c cb 1c ca 4a ba 20 47 05 88 07 56 32 48 e0 6d be c2 91 4e 99 3c 17 4d 3d bc b7 33 c4 88 1f 41 8c fb 89 db 0b 9f 8d fc 8a cd 20 f1 32 ce 56 88 c9 60 ea 58 d3 af e5 d0 cd a7 54 91 b9 c3 03 9e 7f 49 1f 00 77 de 8d 63 d4 b5 35 a5 ab 80 c4 9c 23 ec cd 93 d8 8f 1d a9 ab cb 46 b4 2c 23 72 b6 f2 e1 8e 72 0a b6 fb 67 fe 7c d3 df 87 fa 7a 09 64 b8 78 b1 3c 27 d3 c9 03 19 c6 4b 0f 07 b5 73 75 13 45 e1 17 91 7e ff 00 95 ae 9e 07 4d 52 3c 52 7e 6e 68 44 92 34 21 90 e2 3f 2c 46 c1 b3 fb 7d c5 63 c1 d2 ee 23 ba 5b 89 60 8f 44 80 2b 86 00 15 52 77 20 79 18 f3 bd 16 68 ee a0 38 06 38 d3 dc d8 27 2c 77 e7 eb fb d3 bd 3a e9 25 9a 56 92 46 78 52 20 55 19 f2 aa 7c b0 e4 f1 80 06 f5 8e 1d d1 9b 8e bd ff 00 28 49 b7 c3 3b f8 f7 c2 66 f2 c2 da cf a1 48 f6 aa cd 75 1e 03 4c 13 59 c3 0d bc 63 61 db 61 9a e0 6e 52 44 99 92 65 71 28 dc 86 1e ef bd 7d 42 21 1d b5 94 b6 d3 23 4d ea 23 99 61 8a 51 bc 7a 72 03 1f e5 39 d8 7d 6b e6 d7 af 11 bb 95 ad cb 2a 06 21 03 b6 a6 50 0e c3 3f 4d be d5 da d3 dd 1d dc ae 6e f1 96 76 49 98 b4 80 c7 03 3f cb 9a af a6 d8 00 d1 0b 1d f4 80 07 14 63 69 70 81 0c 91 36 97 3f 19 1f 5a d0 33 c2 43 24 63 f1 1a 48 8d 39 f7 8f a9 aa e7 03 03 bf 15 2e c9 a3 03 2d f3 e2 a6 35 d6 7b 9c 76 1b d0 07 ba c6 45 2a a9 27 f9 b1 5e d4 41 e7 e8 45 59 dc 31 03 48 00 76 c5 78 1c f6 c8 a2 0a 04 05 5c b1 c8 db eb 52 a4 02 75 a9 27 b1 07 8a 2a e9 03 3a 81 d8 f1 cd 44 51 19 d9 c2 95 1a 50 b1 2c 7b 01 9f de 8d 24 dc 17 84 99 6d c9 38 f1 d8 51 9e f1 9e d9 61 1a b0 84 95 3f 5e 69 44 dd b2 c0 63 8f a5 58 86 c6 a0 e0 2e 7b 9a 1d 93 11 66 d1 89 54 b6 78 df 48 72 43 02 1b 27 e9 f3 55 86 45 8f 59 ce 0e 9f 6f d6 85 a5 9c ea 73 cd 11 20 56 20 17 00 72 49 ed f6 ed 44 f1 94 2b b2 a0 c9 1a 98 fd 73 47 80 f1 a8 16 00 ec 09 ff 00 98 a9 b2 85 1a 72 d3 1c 45 10 d4 db d7 bd 6d 04 ac 28 a3 27 9e f8 f1 40 3f 24 05 e7 b3 a4 1f 34 63 a0 af 70 58 1e 47 f4 3e 29 d9 a3 8d 21 55 d7 ea 60 10 83 3a 74 13 df 18 de b3 62 65 59 40 7d c9 38 ce 76 51 4c db dc 88 03 b3 a0 91 ce c5 a4 f7 01 e3 02 9c b8 81 85 9f c2 dc 72 69 5c a8 55 52 8c 8d 9c e0 03 ce 3b 9f 8f 1e 6a 24 40 74 30 52 11 b6 00 1e 08 fe df 4a ac 0e ee c1 bd 30 ef a7 01 76 d8 7c f9 fa 54 98 c7 b5 8b 6e 1f 46 33 b8 fb 53 f2 14 c7 43 81 4f 7f d7 64 b3 b3 f4 2d e1 04 1d 89 93 71 fb 71 4d 74 ce a7 76 f0 03 24 99 19 c6 7f e7 15 8c e8 a3 28 e5 b5 64 ab 70 7b f1 46 b5 79 2d a4 fe 1a 99 43 6c d1 e3 9f 8f ad 41 f0 8d bd 23 2b 7c 5a d2 5f 72 1c 2e b6 df a8 e9 21 64 18 3e 6b 52 1b c4 71 a5 88 39 1c 72 0f da b9 45 b9 b7 67 d2 65 5c 1c 6e 4f 19 ec 69 eb 45 d5 22 ae bd 39 e1 b3 b5 65 aa c3 82 ea 36 9e 37 34 a6 ba 97 e1 9b 2b a9 04 b6 b1 a4 33 fe a2 83 fe db fd 40 e3 ea 2b 8a ea 16 13 59 dd 4b 14 f0 ba 48 a7 64 63 93 8e c4 1e e3 e6 bb 38 ba ac f6 d0 ce e1 f5 32 ec 58 6f ec cf 6f b7 f7 a6 60 b4 4e bf d2 90 75 03 1c 72 b9 62 98 6c b2 9e da 4f 7c f8 a6 8f 50 58 76 9c 85 0d 46 84 38 6f 6e 0a f9 e1 0e ef 1b 7e a6 90 60 9c 7f 43 ff 00 9a 3a ea 72 18 b0 55 0d 8d 59 c7 f4 14 4e a3 65 2d 9d db 5a ca c3 d6 46 19 55 1c 7c 66 95 1f ad 99 78 fe 63 5d 00 47 2b 8c 46 68 a7 5e d9 a3 5b 39 64 9d 56 3b 90 cd b1 f7 22 a9 d3 b8 fe d4 b9 28 61 91 18 1f 54 b2 e9 39 e0 0c e7 f7 da af 69 14 77 17 90 45 3c 85 15 d8 2b 9e ca 99 dc fe d5 53 12 37 50 d3 14 87 f2 ed 29 44 91 bf d2 0f 27 ed 4c 47 a2 00 9e 2d 2e cb a5 88 1c 76 cd 79 58 95 c9 07 19 a9 65 f6 96 04 f3 cd 40 60 38 e6 bc b5 42 45 52 93 82 32 38 a8 c1 35 e2 49 1e ec 9a f1 39 18 dc 79 a0 55 c1 0b d9 dc ed 53 ab 23 15 ed 8f d2 a0 2b 30 3a 54 9d 3b 9c 0a 04 d2 20 87 22 da db bd c4 c1 63 86 49 f1 bb 2c 63 7d 23 9f a7 d6 bb ab 1e 81 0c 6a e6 0b 51 11 b9 b7 65 7b 79 e4 c4 99 e0 0c 8c 85 07 9c fc ed 8a e4 ac 0c f6 ba 25 b5 b8 78 5d f6 67 53 8c 0f 07 e2 b6 53 ae 5c ca 8b 6f 77 2b 41 13 8f e2 cb 6d 9d 78 19 c6 07 83 c7 8a 02 46 f0 a8 22 ee b5 ec fa 4d f5 8d 90 b7 87 12 b5 b5 c1 74 58 fd c7 41 c6 c0 64 67 39 20 e4 9d b7 db 8a 5f af c0 b6 7d 5d 66 16 72 5c cf 3b c9 22 ac 9e f8 e3 51 85 d5 81 c0 18 1f 6c d2 97 77 1e 9a 41 73 66 a1 e0 48 c5 ba fa 72 10 d0 e7 00 96 5d b5 7f 36 3e a7 ed b5 6f 7b 73 1c b6 d6 96 ce dd 56 0d 45 24 95 58 07 8d 87 05 8f 00 63 3c f3 8e f9 a6 bb 46 88 e5 62 c5 d6 04 33 5b f4 ee 9b 3d a4 2b a7 db 2c 25 8a 60 8d c6 4f b8 36 ae 07 83 5b f3 47 6b d6 fa 34 d6 4f 3f ac f6 ce 43 4c cb aa 44 65 f0 bd db 4e d9 ef 55 7e 89 f8 7e eb ab eb 8a 48 c5 ca 67 d8 8c 18 67 3f a8 8e 41 ed 8e 31 b6 2b 47 a5 74 a8 ec ae ee 6e 22 9b 2b 73 83 e9 68 0a 54 ef 93 91 c0 c6 06 de 28 13 84 b7 43 2b 9a ba 9f f3 a8 60 b1 b9 66 96 de 58 dc 2b 0f d7 b6 a3 b2 6e 33 9f 76 db 67 15 b1 d1 d3 a8 dc 47 71 6d d4 d9 9a 39 43 0f 4f 41 65 00 1f d4 09 3b 6a 07 8f 8a c7 eb 5d 0a e6 cb ac cf d5 1a f2 38 6d 9a 45 3a 8e cc 54 8c 1c f9 3b 63 1d f9 ad 0b 18 ed 0d e5 93 3d cc 70 c9 1b 07 d0 a0 aa cb a8 91 9f ae f8 23 81 5e 26 d5 2e db 68 31 db cf 0f 4f 31 de e2 c2 28 e6 31 c6 cd 18 32 ba 2e 71 a7 7c 67 3a 8e 78 c5 5b a9 5d 86 b6 5b 8b 43 13 47 1a e0 3c 8f a1 a3 db 6c 8f 27 cf d4 9f 14 2f c7 71 96 ff 00 d4 b0 b8 0e 07 a6 ab a7 d8 a3 3b 92 7c 9e 31 5c e5 e5 ec cb d3 92 d5 83 38 92 3f e2 2a be 40 c1 d9 4f d8 0a cd 20 b3 45 51 8f c5 de 51 ba 85 ed d4 b6 aa 92 ba 29 72 84 2a 12 73 9c e4 63 bf 6a 0c bd 5a 6b 1b 49 6c ed da 30 84 fb b4 9c 31 c8 d8 fd 3e 95 99 75 77 eb 95 08 9a 4a e0 0d 03 f4 e3 80 b5 12 c5 2b 80 57 12 64 04 0a 77 65 ff 00 c5 40 42 c1 40 aa 78 ee 20 86 ab 5c 5e b5 c4 07 d4 62 24 c0 05 98 93 a8 0f f9 9a 27 47 b7 37 8c b6 cd 91 01 99 5a 47 d4 01 1b 60 63 3c 93 f1 51 0f 4a d4 c0 4f 73 14 40 f2 00 24 f1 48 9d 70 97 00 90 1b 63 b6 32 01 aa 80 dc 86 a9 4e 26 c3 a4 0b bf e9 97 1d 1b a4 5a 3d b2 dd cc 91 ce 3d f0 bc 85 c9 39 e7 8d 88 d8 e6 af 63 0d bf 5b 4b 8b ee a5 63 2d dd ac 68 a8 8c 0a 82 87 7d 4c a4 1c f6 1c fd ab 98 8f f0 ff 00 54 b9 96 d2 57 7b 77 6b c0 25 50 6e 06 a2 a3 b9 03 e0 57 75 d3 ec 0f 4d e8 0f 6b 1b 83 20 73 30 58 58 b0 67 c8 c2 ee 37 c0 c7 c6 f5 0c 30 59 36 42 ce 2c f0 b0 ad ff 00 0a 58 c9 77 22 7a 37 2b 04 79 2c d2 b8 20 e0 6f 92 bf e3 f7 ad 69 ba 1d 8d f0 b6 ea 36 d2 6a 8a 34 08 d1 7a 7e d3 8c 6c 7b 83 c6 fe 29 7b b9 7a 95 cc b1 fe 5a d2 58 c4 25 83 5b ec 35 8e fb 64 6c 7b 76 ef 4c 1e a1 3d c5 c0 85 ed a7 8e 12 fa 64 66 61 a0 7f a5 70 38 c6 37 c7 18 ac ce d4 38 59 6f 3f a2 63 1e ec 15 f2 68 58 b3 08 fd a3 51 e5 8e 00 a3 18 9e 07 72 ba 9f 1c b0 07 14 a2 f8 ad 45 b8 1f f4 e6 8b 38 c7 b4 92 79 cf 35 d6 a0 70 56 37 97 34 d8 59 e0 e0 8d 47 35 66 93 fd 23 02 ae d0 95 42 da 3d 9f ea 1d a8 4a 9a 81 c1 a5 aa 44 10 55 f2 08 ef bf 22 bd ab 48 f6 83 9a 9d 2a a9 96 6d cf 02 a1 41 24 63 3b d7 b9 47 8c a1 b3 6a 6c f1 9e 6a 4b 64 62 8c 23 53 b8 61 9e f5 1a 70 76 03 3d 8d 14 37 5a 18 2c 76 cf f4 a6 03 32 a9 d5 b9 27 bf 35 18 f6 1d 47 ed 5e 1e e6 0a 0f 27 9a 05 7a ad 15 34 08 ff 00 8b 9d 07 38 41 c9 aa c0 19 e5 02 39 16 3c 9f d4 c4 60 54 b2 a0 9f 48 26 65 1c 1c 60 1f f6 a8 b8 00 cd aa 34 28 b8 1c 1a f0 e1 07 72 a0 44 58 95 d6 18 0d ce 2a 62 65 c8 52 0e 80 77 d3 c9 aa 86 d4 a4 0c e3 3c f6 c5 10 a9 d8 2e c0 9d f1 5e 28 0e 11 e0 9b d1 75 7f 4d 88 40 da 53 c1 3b 0d c7 71 cd 39 6d 0b c9 d3 92 e5 f2 c1 1b 65 d5 a4 b2 67 71 9f 39 ac d4 2e b2 16 55 07 00 00 0f 7f ad 5d e6 cb 12 ce d8 c6 95 1d 86 3b e2 bc 4b b0 02 42 d6 e4 91 94 7c c7 09 70 53 4e 43 00 ac 35 69 cf 1f fd d1 52 56 0a 24 59 8c 6c 0e 0c a1 b1 82 73 fe fb 8a 51 58 05 0b 81 92 73 ce e7 e7 35 2f 26 98 c6 9d d5 3d a5 94 7e ac ff 00 9a a0 72 89 8c 94 75 b7 1a 61 74 64 f4 ce 0f f0 db de 37 ef f3 b7 f9 a7 61 ea 6e 85 a3 92 de 26 0a 4e 5d 49 42 4f db 6f e9 59 6b 29 48 c6 87 60 03 6e 06 d5 0e fe e2 14 96 19 c0 f2 0f 6a f3 9a d7 8c 84 f1 49 2c 47 a4 d2 d3 6e b0 8f 09 55 84 8d 47 04 6a c9 c7 d7 15 57 eb 73 c5 00 8a d9 16 d9 91 74 bb af eb c7 72 0f 63 f3 59 8a 41 1e df d6 a7 3a 4f 07 cd 48 65 12 a3 23 30 65 f7 71 9d 38 a9 88 23 06 e9 69 3a c9 dc 36 ee 47 b4 78 1a 55 fc dd c3 a2 ef fc 55 5d 65 7c 1e 7f de 84 65 29 ae 25 65 74 ff 00 52 f7 f9 de 8f 24 d0 48 ef 21 54 86 7c 8d 21 41 31 c8 3b e4 76 39 df c5 2b 3b 07 52 aa 81 4e 78 15 a0 ac 60 59 c8 52 b2 b4 71 98 c8 f9 2a 47 7a bd da c0 3d 26 b7 72 52 44 cb 46 c7 25 1b 82 09 f1 dc 7c 51 6d ad ff 00 37 33 10 54 2a c4 cd 82 d8 24 81 c0 f2 49 ed de af 0a c7 13 c5 35 c5 b1 78 d5 8a ca a4 15 cf 6f b3 0f ee 28 65 78 55 a4 1f 51 93 9f 6e db 55 da 38 da dc 61 89 9c c9 a4 46 14 e7 18 e7 f7 da 89 6f 6b 2d cd e4 76 f1 1d 3e a3 68 56 90 10 bf 73 5d 1f e1 3e 98 e2 53 75 75 0b 24 da b4 aa ba e0 a0 1c 9c 1e e7 fc 56 6d 4e a8 69 e2 32 3b 3f ca db a7 d3 f8 af 0c 18 ef f4 5c cd d5 a5 cd 9f a6 6e 61 78 fd 45 d4 9a c7 ea 02 84 e8 df 97 13 6a 1b be 9d 3d f8 ce 6b 7b f1 9d f2 5e f5 a1 6c aa d1 a5 aa 08 93 6f d4 4e e4 fd 38 ac 9b df 41 ae c5 b5 a4 8e d6 c8 46 9d 43 07 3a 46 4f ef 9a a4 12 39 f1 07 3c 51 3e ff 00 45 39 40 f1 36 b1 28 ac da 4a ea 3f 4a 72 c9 1c 5d 22 2c ba 24 73 a7 4e 9c e4 53 36 b6 50 eb 51 eb 01 83 be 46 1b 07 b5 10 db 18 c3 31 2b 84 c0 ca 9d cf de 83 e4 14 40 5a 62 81 cd 36 50 da 60 01 55 5c 95 39 60 99 25 fc 1c 76 fa 53 3d 38 19 ee 4b 15 96 45 8a 30 ec b1 9f 79 ed f6 1b fd aa 21 b5 32 5c fa 11 9f 7b b8 00 8d b9 f2 7b 79 ad 9b eb 48 6c 05 97 e5 11 6d ee 6e 48 00 ab 82 87 1b 6f 9e 49 3b fd 69 58 db c9 5a b2 16 6c 3d 52 78 23 f4 23 94 18 97 21 54 a0 38 df 20 e7 1b 1a 23 f5 5b e2 88 90 cb e9 a8 fe 48 86 8d 43 c1 c5 0e c9 8f fd 40 d9 df 05 d2 ce 59 9c 7b 5b 00 73 ab 1c 1f a6 f5 bf 1d 95 b9 83 f2 f0 91 21 49 3d c8 ea aa d3 81 be 95 df 39 fa f2 2a bb b1 41 0c 03 95 9a 9d 42 da 46 9e 69 7d 34 98 85 41 e9 26 09 5f e6 d2 40 e7 eb f3 5a dd 2d a6 0b 0a c5 7b 2c 51 86 cc 70 22 eb 6d 18 e0 8e c0 e4 11 4a e8 b0 b5 95 55 bf 88 c4 b2 3f a6 c1 bd c7 7c 10 3e 38 23 6d 8f 34 e5 b3 2c d6 90 cc f6 d7 46 12 d8 03 d4 cb 81 93 86 ed ec f2 79 03 02 95 a1 e7 f1 14 92 34 0c 34 ad cb 3b b3 73 6e 61 bc b6 23 18 89 f5 a6 a0 c7 9d b3 c8 f8 ed 59 b7 bf 87 8d bd e8 bc e9 21 44 ba cb e8 3c 60 9d f4 93 b0 fa 56 54 fd 5a ce 49 4c b7 1a a6 4b 64 c8 64 d6 a6 0c 9f 6f 6c 0c 82 31 4c d9 fe 2e 82 de fb f2 77 d3 09 60 3a 74 5c 2e 0a 9f 97 c7 07 e4 53 5d 15 22 79 09 ff 00 c6 56 2d 73 66 3d 3b 56 9e 4c b0 5d 2e 46 09 19 07 4f 73 b6 3e f5 f3 9b c9 25 d2 8e e8 cb a4 68 df b7 c1 ff 00 7a fb 14 82 0b ab 77 8a 54 3a 30 55 b2 e4 1c 77 c1 1b f8 dc 57 cf 7f 10 fe 0e ea 10 5c c9 71 03 49 77 6c 4b 3b b9 c6 b4 ef ee 1d fe a3 9f 14 8e 16 9c 3e 9b 4b 92 8e 49 11 f3 11 2a de 47 6a 3c 57 93 45 0e 85 c9 6d 5e 37 6f bf 9e 2b 4a 5e 85 15 a3 ab df 75 18 92 d5 bf 4c 91 02 cc e3 19 04 0f 9f 9a 05 f4 16 c5 48 b3 d2 d1 8f fb 72 2a 90 64 db b8 f3 e6 91 ec 03 91 ca d5 a4 64 85 c4 b0 d1 01 0a 6e af 24 c0 28 54 8b 03 0c 48 c9 d8 e7 b7 3b d1 bd 19 ba 93 7a f1 ba 3b aa 12 d9 d8 b9 19 27 1f 3f f8 a5 16 c9 e6 74 81 60 50 d2 30 02 52 70 14 fd 73 8c 7c d5 ad 11 ad a7 75 fe 3a ba e0 0c 1d 38 3f f3 15 0e 86 1e 8c 15 b1 c6 53 d2 ec fb f2 5b 56 b7 5d 5f a5 ac 10 3c 52 c9 1c e9 ad 21 5d dc 00 7c 60 95 dc e7 1d f3 5d 67 48 eb 76 f7 1d 35 e5 d6 ea 6d 62 cc d1 91 90 87 38 20 0e 7e ff 00 6a e5 2d 6f 87 4d 47 2a 24 26 5d de 4c e6 41 83 be f9 c2 ef be 07 c5 39 17 5e e9 e6 03 05 fd 95 d3 26 97 f4 14 b8 65 95 4a e0 06 d8 12 73 9d fb 13 f1 50 7d b8 ee af b2 cd 2c 6f 02 de 2a d3 d7 9d 55 ee 2e 61 bc b7 9c cd 75 0b e8 30 c7 93 02 02 36 56 6d b9 fe e2 8c 89 77 77 20 e9 77 d0 3c a9 26 f3 3a b8 0a 57 b8 5c 6e 0f c1 19 db 15 ce bd dc 89 2c 7d 56 c7 58 8c e9 4b a0 7d de 93 05 c0 d4 bc 37 19 d5 df e2 9f 87 ae dd 47 d1 26 be fc c8 95 a4 9f f2 a2 4b 9c 6a 8c 69 c8 63 a7 73 df 6f 8e f4 26 84 12 08 1c 70 b1 33 69 19 e5 7c f9 0f b8 1a 36 01 20 9c 52 e0 e3 b5 14 12 d5 d2 2a 09 98 e5 20 b9 2c 37 1c 01 4c 06 8f d1 0b e9 46 40 f8 df ec 6b 34 39 d5 b7 39 da 8e 1c 93 ce 7e 6b c5 c4 29 98 c1 2a 1d b5 39 3a 76 f1 50 c1 81 db ed 8a 86 c9 7f 68 27 27 b5 10 2b 2e ec a7 7f 34 17 b0 15 50 80 85 9b f5 54 9f 72 02 05 59 b0 14 e0 67 e6 a0 10 3b e7 c9 c5 79 0f 92 81 ed e7 1c 51 a0 84 c8 fa 41 0a b8 c9 62 38 aa 15 56 61 fe 3b d7 83 32 8d 0a 7d a7 95 3d eb c4 12 28 1c a2 d2 2f 21 4c 9a 56 72 b1 92 c8 a7 62 c3 9a f7 ea 2c 5f 20 f3 a7 8a 95 ca 8d 97 51 22 a8 58 eb 27 cd 16 8c 21 f8 89 a4 cc 77 4d 05 a3 7a 49 1a 3e 70 c4 ee 4f d8 f6 a0 06 5f 44 7b 8f a9 9c fc 0a 94 4f 50 71 93 da a0 46 be a2 ea 21 17 ce 76 fd fb 57 a8 02 86 78 b4 68 c1 fd 5a c9 18 c6 7c d0 e5 05 3d a7 19 3c fd 2a da 04 42 55 69 30 53 80 37 d5 43 9d da 79 4b e0 e4 ef c5 01 ca f5 61 1a 07 11 ca ad 22 fb 46 09 f6 e4 10 3b 7c e6 89 70 61 13 bc 71 26 88 cb e4 2e ac f6 f3 ff 00 31 4b 33 c4 d3 33 15 65 4c 83 a3 39 fa d4 be 91 32 b4 6c 5d 39 0c 76 27 eb e0 d7 8b 46 eb 5e b2 1b 4a fa b2 70 06 3d de e6 1f 3f e6 ad a8 85 51 a4 81 d9 bc e3 e7 cf 9a 2f 4f b5 97 a8 dc 9b 74 0a a5 81 66 27 80 07 19 a2 f4 b8 ac a4 95 4d f5 c1 8e 25 62 08 c6 d2 1f 35 e7 4c d6 df 72 3b 0c 94 1b 0b 9d 5d 81 4a 6a 91 81 7e 70 d9 38 1b 9f 3f 5a d0 e8 dd 3d 7a 8b bc 28 ea ce 57 3e 98 70 1b ff 00 90 f3 8f 14 6e a5 75 d2 65 88 45 d3 ad 3d 37 53 9f 59 86 8c fc 01 e3 e4 d6 52 16 0c 08 62 be 9b 65 5d 76 2a 7e 08 a0 d7 be 48 ec 0d a7 d5 12 d6 31 f4 72 3d 13 2d 6e f6 17 d1 c7 77 0a be 83 9d 0e 32 ae 3e 0f fc c5 52 43 0a a3 22 ab 7a 81 f9 66 ce 53 1c 1f 90 7b d3 13 f5 6b 8b e9 20 7b e3 1c e6 0d fd e9 8f 50 64 64 31 1c d5 3a 7d cd ac 17 62 5b 9b 34 ba 42 18 18 a4 62 01 07 8d c6 f9 14 f1 ef da 37 d5 a5 93 66 ee 9b a5 2b 7d 01 82 28 e4 b1 40 d1 63 32 c2 c5 59 c6 7f 98 70 4f cd 74 70 75 8b 18 ad 12 3f cd cf 1d ac ad ad 2d a6 02 42 18 1f d5 c6 46 4f ef 9a c2 82 ce 4e a5 73 2f e4 60 58 63 ce 7d cf 9d 0b 9e 33 c9 ad 4b a8 45 87 47 36 32 5c c5 22 67 52 7a 96 c0 fa 79 ff 00 de 37 19 f9 ac da 89 23 79 10 17 d1 3e 5c fb f9 ab c3 13 d9 fe e0 de 3c d1 6e 7f 11 5a cf 0a c1 6b 16 0b 83 ea 49 70 36 4f a0 19 de af 7d d4 2e 07 4d d1 69 23 4f 24 90 66 4b b9 8e 9d 20 9c 0f e8 0e 3e 31 5c 8f e8 62 40 fd 43 6c 57 ae e7 9c da db c5 22 32 a2 21 0b 90 70 e3 3b 1f ee 33 52 ff 00 e7 b0 00 c1 c0 37 f3 3e fe 8a ae d5 bc 9d c7 93 84 59 e4 32 5c 44 b7 b3 31 53 93 ac 64 91 b6 06 41 df 80 3e d4 a4 0a 5e e9 40 38 f7 72 06 7f a5 3b 6f d4 e4 98 34 77 a2 7b 96 f4 84 70 15 c1 29 8f 23 19 61 8f 9d a9 22 e7 d7 d6 06 e3 b1 1f de ba 07 9b b5 85 a6 b0 42 76 de 50 f3 be a3 ef 04 fb b9 14 78 a1 7b 9b d8 ac 20 93 d2 d6 76 2f ed 07 6f f3 59 d0 ce c8 8c 88 71 ac e4 ed b6 2b 47 a5 df 49 69 74 6e bd 2c a2 a8 8e 45 39 df 3d f3 d8 d2 00 37 59 e1 74 1b 26 f1 5d d6 bc d6 02 da 24 bc 79 99 5e 19 44 72 28 56 05 08 19 07 e7 6d f3 c5 6c f4 fb 70 d0 3d ad bd cc a5 9e 23 35 a9 96 25 d4 87 39 38 df ba ec 78 cf 9a b4 2b d4 5e ea 06 fc f3 88 5a 2f 4f d5 77 18 07 39 3e c2 72 c7 04 71 c6 dc d0 e6 ea fe 8d fc 8b eb 25 98 67 0c b1 b2 67 29 93 9c 15 3b 82 77 fd ea a1 80 15 4b 24 6d 58 fd 3a 18 8f e2 19 d6 fe 29 1a 7f 57 da 58 8e 34 9f 6b 0e 31 c7 1c 76 ad fb 59 ad 20 58 65 16 c2 36 c1 31 b3 69 5c 60 03 93 8c 91 9a 67 a5 f5 17 be bd d1 2d 9a b2 c6 71 2c ac 83 30 92 3d a3 ce 48 23 71 dc f6 a1 ac bd 12 24 9a 56 8a 36 f4 a4 d0 cc 19 8a 82 76 fd ff 00 ad 0a a4 2f b1 0b 3f ab cb 69 6f d3 9b a8 40 b2 9b 7b 99 f5 11 16 07 a2 e0 10 71 b1 03 3f 6a a5 95 cc d3 7a 57 26 1b c3 71 1e 15 94 6e 06 31 fa ce 0b 00 7b 8e f5 b3 61 d6 6c 65 92 3b 2b 35 d0 d2 92 17 4c 58 52 4f 72 06 d8 c0 a3 75 0e b1 67 6c ee 85 d9 8c 78 2e 63 18 0a 47 19 ec 33 f3 45 29 06 e8 a4 cf 4a 98 5c a9 8a dc 9b 39 8a c8 c8 36 75 39 dd 9b 56 72 47 61 e0 e0 63 02 88 9f 86 6c e5 82 58 e7 8e 38 d6 e7 2b a6 21 fd 41 23 63 df 1b f6 a6 ad ba b4 57 36 77 17 9a 64 44 8c 1f 71 18 24 0e e3 cf c5 61 dc fe 24 9d ac bf 37 0b 81 80 75 2b b6 30 3c f1 82 73 c8 f0 2b d6 bc 2f 85 d8 40 b1 5b c0 22 18 54 89 42 2e e0 fb 40 d8 9f 9a b3 5c 42 ae 1c ca 72 06 31 9d be b5 f3 8e a7 f8 a6 fe 19 62 4d 50 02 ab 87 48 f9 c9 1f 23 18 fe f8 f9 a9 e9 ff 00 8a 6e 58 24 ae b0 ca cb bc fe a0 54 25 fb 11 be e3 14 28 5a 5a 17 56 bb 8b fe 85 d2 fa a3 eb bb b4 59 64 55 c0 97 27 f6 fb 57 2d 7d f8 62 ee 1b b5 4e 94 02 db 6f 87 38 0b 16 f9 c1 63 be dd b3 9a e8 ac fa 99 65 0e 59 59 03 73 1b 03 ff 00 39 c7 da 9c f4 a3 bd e9 d3 da dc b9 29 29 21 94 1c 15 1e 7f 7a f1 15 82 a8 d2 f8 cd af 95 1f 51 2f a4 81 ee 16 51 18 60 5c 1c 83 83 c8 3e 3e 94 c4 d7 37 12 b0 81 a2 59 4b 2e 63 ca 82 54 1f f4 fe d5 bf f8 8b f0 ed 87 4a e9 93 5d 41 2d cb 5d 0c 08 dc 9c 00 7e 40 ec 77 ae 76 14 31 c6 8f 24 6e ca 9e d6 d6 46 37 df 6f 15 87 55 1b 07 50 01 76 34 72 99 1b 47 2a 62 2a 3d 34 f5 11 0b 2e 19 4e 4a 13 f2 7b 7c d7 84 2d d4 2e 05 a5 92 22 cb 1e 72 64 72 01 ff 00 56 3f e7 15 5d 51 a1 57 30 6a 57 c3 03 2e f9 03 f9 7e 47 da b5 7f 0d db 45 f9 a4 ba 6c 44 01 2a aa bb eb fa ff 00 cd eb 33 48 19 7f 64 9f 11 73 db 1d b4 f2 b5 7a 0f 48 93 a6 58 bf e6 a0 32 c7 73 ee 90 94 ca 01 c0 18 fa 77 a4 bf 10 74 4b 2f 46 18 ac 9c 5a 99 a7 01 d0 29 21 f6 24 1c 7c 7f 9a e8 ed fa c8 b2 b6 f4 7a 9c 05 a3 5c 0d 60 19 36 cf 2d f0 3e 38 fb 56 24 e6 4b ee a5 35 f7 4b 95 e2 68 d1 8c 61 86 a6 0b bf e9 ce 00 1d fc d5 46 a2 3a 04 15 c1 f0 5f b8 9b 5f 31 a9 07 15 15 ea dc 8a 32 18 d4 86 20 92 38 1e 4d 4b 3e b7 2f 8c 7c 50 6a 6b d4 94 84 f4 0c 0a 00 c7 e3 ed 46 54 d5 ed 05 b1 e0 52 f6 a7 f8 27 61 b3 73 8d e9 b8 4b 03 a9 f1 a7 8d b6 af 5a ce f6 9c d2 87 8d 5a 3d 25 01 20 f2 0d 29 24 4c 8d 8c 83 f4 ed 4e c8 73 12 81 ec d3 e3 b9 a5 41 d5 73 a5 db 04 9d cd 02 51 88 79 a2 74 eb 77 b9 bf 86 dd 0e 92 ed 8c e3 38 f9 ad 2e a7 d2 60 b3 68 de 1b 84 99 24 19 c7 7f af d3 34 84 17 7f 97 b9 12 da 0d 33 2b 1c 39 ec 3e 3c 7d 68 cf 7a d7 97 03 f3 41 7d cd a8 b1 e4 73 df c6 f4 dd 92 bc 3b 75 f6 43 45 21 b2 55 4a ea c7 3c 7d 69 7b a0 a2 e6 40 8d a9 73 b1 f8 a7 22 65 98 9f 61 28 06 06 79 fb 0a ce 61 ee 3b 70 71 5e 09 e2 16 55 87 8d f2 7c 78 a6 61 78 d9 b0 c5 b1 91 ee c6 41 1f 4a 55 4e fc e2 8a 84 6f 91 b1 dc e0 d1 2a ae 09 99 14 e5 9b 20 a9 3a 41 27 38 14 a4 b9 d5 a8 02 37 d8 d3 b6 56 92 de 6b 11 15 d2 b8 2f a9 b0 39 e2 87 d4 2d e6 8a 63 1b 42 ca 8a 0b 2e d9 c0 fa d4 c4 8c df b6 f2 89 85 fb 77 d6 12 83 75 3a 88 c0 f2 39 a2 4b 09 86 7f 4d 98 1c 61 b0 7c e3 83 42 04 ab 02 46 d9 c8 07 8a 7e d2 d2 e2 ec c8 b1 c4 f2 cc d8 6d 80 ce 73 fd 29 9c e0 dc 93 84 81 85 d8 1c a9 e9 8d 22 5c 95 b7 97 d3 67 05 4b 93 8c 0a 67 a8 5b 74 db 4b 75 8e 09 1e 69 d8 fb 98 1c a8 03 fe 76 a4 5e da 68 57 12 28 56 04 83 a8 8d b4 9c 11 fb fe f4 78 21 b7 94 e6 7b 98 ad d0 9c 05 0a 4e 2a 4f 6d 3b c4 bc 7a 0e 7e 7d ca 2d 79 db e1 d6 7d 7b 7e c1 28 1d 02 15 c0 c9 38 df c5 78 15 11 15 27 04 1d 86 36 23 eb 4f 5e 74 f5 b5 b7 f5 a1 b9 8a ea 13 8c 95 c0 65 cf 14 91 95 41 52 80 61 4e db 7f 71 56 8e 46 bc 6e 6a 94 b1 3a 33 4e 09 ab 6b 69 24 82 69 55 92 58 21 1a b4 12 72 c4 9f d2 3e 69 3f ff 00 e8 34 28 04 1c e9 3e 3c 53 f6 f0 5e 1b 51 34 2a d8 90 ea f6 36 e3 1d f1 fe 79 a6 6e 7a 85 dd d5 83 d9 cf 04 52 c7 03 17 67 58 fd e8 4e db b0 e3 3f d6 83 1c 1c 48 0e 07 3f 6f 65 79 e0 b2 89 6d 63 ee 97 b2 69 6e 27 29 17 a8 da 93 f8 82 12 15 c8 1b fd f1 44 8a f0 d9 5c dc 2c 6d 35 c2 4c ba 09 66 2a c7 ce 06 ff 00 d4 57 af 2e ff 00 35 14 36 8e 21 90 c0 a1 23 9a 18 f4 b1 18 d8 12 31 9f be f4 bc 1d 39 e5 b4 92 e4 cc 89 24 4d ba 30 3a b1 e7 3d b2 78 a6 0c ea dc 12 39 ed 2d da ee 12 ba d5 9c 92 24 c6 08 ca f9 ec 68 f7 77 53 3c 70 46 f2 4e d6 f0 80 a1 75 65 54 77 c0 ed 41 61 2c 72 6a 93 52 92 35 06 c6 33 57 9a c4 c6 ba ff 00 39 0a ea 8c 3a ab 92 a5 87 71 f5 cd 7b 70 0e a3 dd 3e db 6e e1 d9 1d 7f 25 17 52 f5 7a 74 b7 45 00 cc 4e 83 44 91 37 66 23 be 0f 20 1e f5 44 85 e5 73 24 e5 64 72 a5 8a 9f 69 ce 77 aa 58 24 4a ad 27 a8 15 82 ee c4 ec bb f6 df 9f ad 31 ea 12 55 1a 42 55 89 20 e3 62 29 5e f3 d9 6a 86 16 d5 bb 29 69 6d 66 86 62 ae 34 3a 31 ca 38 dc 1f 15 a1 6c 6f 2d 1a 3b a8 4e 00 20 ae b4 04 31 cf 18 ef f4 a0 4a 91 a4 b8 d2 e4 3f e9 04 f2 3c ef 4c ad c7 a2 26 58 86 a8 18 04 25 cf 18 e1 86 38 3e 3e f5 19 24 7e 36 ad 11 c4 d0 30 b6 85 e8 9e fd 26 89 92 d0 db c6 70 b7 2d 95 2d 8c 6a 00 0c 0c 64 f1 45 82 c3 a9 25 d5 e5 ec 92 a5 bc 33 69 f7 95 01 74 8d b5 8e 76 d3 90 31 e4 71 4a 74 6e a3 68 cf 15 b5 d4 10 97 47 d6 66 91 b1 9f 00 6f b9 df ee 29 d1 2b ca 97 b2 dd 00 e9 8f 48 c6 81 5e 45 1a 81 6c ed 82 00 03 8d 80 fa 56 a6 12 45 94 5d 63 01 31 73 d4 62 b4 47 e9 cb 2b 4e 8f 06 af 52 4d 8c a4 f1 92 38 3b 7c ed b5 2f 63 24 1f 96 58 de 48 b0 d9 0c b8 01 9b 6d 80 3e 7e 4f 15 16 be 97 a7 6c 96 71 a5 e3 88 c4 71 3e 33 a8 06 dd 09 6d 81 ee 3e 28 96 d0 f4 e8 c4 a7 49 bc ff 00 b9 73 84 89 88 3e e3 b0 6f 19 c8 c6 3d d8 cd 78 dd da 03 a5 3d 02 a5 85 96 2d dc 43 75 3c 6d 1c 11 cc 71 a4 8e e4 8d f1 bf 7f 8c 73 58 57 76 d6 b2 7b 6f e4 8a 27 63 92 ea ec 44 8c 17 39 6e d9 ce 4d 31 71 3d af 54 57 ba 9a f3 13 5a 3f f0 e7 45 03 4a b1 ce e3 1b 00 72 32 7c d5 6c ff 00 2f 75 0c 57 32 5b c6 d2 23 1c 4f 21 0a 8d 36 3d aa 14 7e a1 c1 df 00 51 b0 bd da ca 3d e0 93 a1 f4 18 93 a7 c5 35 c2 cc ed 23 1c b2 b4 39 19 40 c3 73 80 3b 1a ca b5 bb 6b f8 26 b7 bf 86 38 5a 2c 49 ea 68 21 0e 31 bb 81 cf 6d a8 d0 df 91 7f 72 b7 92 3d 95 e4 b1 69 75 6c 49 1e ac 06 2f cf 7c 63 1f b5 30 f1 45 7d 23 3c d1 b6 a9 94 2c 46 06 c9 1f fc 41 c7 7f 3d a9 1d 2b 1a 40 3c 95 e6 44 e3 d4 0e 02 ce eb f6 72 b5 ba e8 b5 8c c7 1a 09 45 c2 c9 85 25 bf 50 51 81 9c 1e 07 61 58 77 bd 32 5b 44 8e 46 92 19 63 90 6a 47 8d b2 08 fa 73 5d b8 48 24 86 4e 9f 7b 0f e7 a0 8e 4c cb 71 31 08 a9 27 07 48 07 da 3c 9c ef f2 4d 2f 7c 7a 0c b2 5a 89 6d 2f 5e 10 c6 de 10 92 86 ce fd d7 90 77 c0 fa 77 a6 70 ee 91 cc bc 94 b7 e1 71 79 67 d2 5b d5 21 21 9d 83 40 54 e5 81 20 e7 6e c3 fc 91 5b 16 dd 78 4e 4c 61 d1 66 5c 97 76 fd 20 fc 8f 9e 29 8e b2 d6 7d 0b a5 5b 8b 54 8d 7f 2c b8 8a 36 3a 89 c9 f7 1f 9e 72 7c d7 1e f7 1d 32 39 01 e9 aa a9 14 99 32 fa 8c 49 50 0f 03 3c 79 ef e0 d3 58 e1 10 ec 2e 9f a9 49 77 7b 6a d1 b5 ed 95 c5 b4 8a 59 90 64 36 90 7b 11 c9 c8 ae 12 f2 43 8c 23 cd b1 e7 5e c7 ea 3c d7 50 96 bd 50 5d 42 ef 33 4f f9 69 82 0f e1 a8 d4 98 f7 15 f2 30 7e e6 83 d6 fa 30 b8 c4 d6 96 de 94 8c 7d c8 5f 91 e4 83 c1 fa 1e 3e 95 9e 57 46 08 07 95 58 fc 40 d3 b1 73 7d 3a e9 e2 9f 24 a3 36 92 13 d5 24 a8 cf 8f 9a e8 fa 6c f2 c7 70 7f 34 56 54 d4 51 b0 74 e0 ec 06 93 c1 df 9f ad 60 de 74 8b 8b 64 d6 50 30 03 2d a4 fe 93 f5 a0 d9 dd 14 ba 06 49 1c 29 c7 b4 70 de 32 2b 24 d0 b6 4c 84 fe 3b 84 66 39 06 7b 2f a3 1b c8 24 b6 9d 08 06 e2 26 c6 9e 4a 1f 23 e3 cd 64 7e 26 9e 3b 4e 9f 13 5a cc ce d2 a9 12 a8 c8 d0 3c e7 eb b7 cd 61 df 5d cc 8a b2 28 d0 ac 80 02 a7 51 24 6e 32 7c d2 37 17 72 dd 5b 93 73 2c 92 36 a2 c4 01 c1 ed f0 05 62 d3 e8 c0 70 78 38 52 91 c5 98 2b 0f 14 58 ed cb a1 76 60 aa 06 77 af 24 05 e3 66 52 30 3c d1 b0 9f 96 6f 51 c9 90 8f 60 07 60 3e 6b b2 e0 7b 2c 61 e1 2d 22 84 72 a1 95 c0 ee 38 35 02 bc a7 07 71 56 93 fe e1 db 1c 6d 45 10 8b 6c 72 da 49 23 b8 fa d3 47 2d 8c 93 91 ce 0d 29 03 c6 9a fd 44 2f 94 2a a0 1c 60 9e 0f da 9a c2 a4 6a bb 80 07 07 b5 78 a8 bf f1 22 c3 27 b4 9d 60 60 f8 aa aa 47 3c cc af 20 4c 82 54 e9 ce 4f 61 f1 4b 7a a4 b9 ec 0f 6f 35 a1 d3 a0 59 0b bc 8e 02 e3 2d 93 c0 df f6 ed 42 97 9d d0 0b 96 6c a8 62 95 a3 6c 12 a7 19 a7 15 bd 75 41 1e 94 6d 3a 48 ce 01 fb d0 5e 26 69 08 fd 60 9d 99 4e 69 98 ac ae a5 56 48 74 8d 43 1a 59 80 2d db 8a 24 a6 2e e9 b2 81 2c 8c 70 8e c3 54 44 80 cb c1 a0 1c b1 c9 3c f3 f3 4c de 5a c9 6b a0 48 54 96 19 0a 0e 74 fc 1a 59 70 ce 01 27 9c 6c 37 a3 69 a3 a2 2c 2f 01 c5 18 e1 63 53 ca e7 04 7c d1 fa 8d 81 b1 91 17 d5 59 55 d7 20 8d 88 3d c1 1d a9 55 c6 72 cb a8 78 ce 28 46 f6 bd a1 cd e1 51 ec 20 d1 4c 43 72 f6 f2 99 2d db d3 24 1e 3e 7b 51 1b a8 5e 5d 40 6d a5 9f 31 f2 c0 8e 69 55 dc ef 5a b6 f3 74 ff 00 4e 30 6c 89 b8 5e 4a 92 01 f9 a9 4c 1a 29 db 6c fd 13 c7 7f 84 3a 87 d5 26 22 0d 01 8d 99 75 28 d4 a7 3f b8 a7 2d fa 9b d8 db 01 68 cb 1b b8 dd cf bc 9f df 8f 14 07 96 35 9c 18 c9 0c a7 18 ec 05 7a 54 8d 95 40 23 9c 01 8c 60 7c d2 3c 35 e0 07 84 cd 05 b9 08 46 05 91 09 45 2c ec 73 f7 af 7a d6 f1 c4 e9 2c 32 49 28 d9 89 7c 60 d1 8a 87 6f 6b 05 d3 db 1c d2 b3 46 0a 21 00 ea e3 24 73 56 a0 f1 95 17 02 d3 61 32 dd 36 f0 f4 df cf c3 6e 5a cf d4 29 ea 05 fd 07 b8 3d c0 df bd 25 08 60 48 0b 9c f3 8a d0 b0 97 ac 4d 67 37 4e b0 17 12 c0 ec 24 92 38 93 56 fc 67 ce 3f bd 35 1f 42 eb b6 f1 bf a5 69 76 90 ce a0 3b 22 1d 2e a7 8c 8f af de aa b2 91 83 6b 3e 39 21 55 91 0b 4a 3b a0 0f 80 1b cf 15 d5 f4 9f c3 37 1d 57 a0 7f d4 22 ba f4 ee 65 6c 46 a5 88 59 10 1c 10 ff 00 39 ff 00 15 83 71 d1 ef ac 2d 52 ea e6 ce 50 8c 70 5a 45 f6 1f 76 30 4f 2a 73 b6 0d 77 f7 56 46 c6 5b 73 61 7c 2c a2 0a 01 b6 97 2f 08 62 32 57 39 f6 fd 3f 6a c7 ac 9c 40 cd e2 af df 92 ac 4c 2f 34 78 5c 35 f7 4a 97 a7 34 9e b5 c4 2b 32 b3 24 b6 eb 20 0c 57 ce 08 e0 e7 63 bd 65 c3 6e f7 97 26 38 a5 01 d8 85 45 94 92 48 fa 8a fa af 54 b1 b6 ea d1 b5 bd e4 25 bd 35 04 39 4d c1 23 95 3f 07 b5 61 5d 7e 1b b0 9e de 3b 78 2d 21 82 fd 50 80 ac ec 16 7c 63 de 0f 9f ed be 6b 24 1f 19 86 41 4e c1 f7 9f 92 67 e9 1c d3 63 2b 8c bb 6b fb 76 8a c7 a8 dc 49 e8 43 ed c2 b0 6d 0b 9d f4 d0 a7 f4 27 75 8e 09 e6 9b 4f b2 35 68 fd c4 67 6d 85 6b 0e 81 71 74 44 b7 12 c8 98 73 14 c2 4d cc 64 70 b9 3b 12 47 f4 a2 f5 29 64 b3 36 47 4a dc 5b c6 73 f9 98 a3 02 51 8d b4 fa 83 62 7f b5 74 84 f1 ba 4f 0c 64 fd d4 8c 4f 11 f8 9c 0f b2 c4 6b a9 c5 a2 59 cb 04 3a 20 39 d4 63 0b 26 33 c1 3c 91 9f 3c 50 4c ef 23 eb 23 05 71 81 da 9c bd 69 ae 6e de f6 33 73 3a 17 04 49 3a 03 9c 79 ec 6a ab 18 81 c4 89 22 90 c3 39 5f ed 8e c6 ac ec 65 7a 1d cf c0 50 92 69 42 ee a1 9b 70 75 1e 0d 5a 08 66 91 0b 10 c1 06 e0 81 8d be 95 69 23 32 ef ab 4e 0f 76 e7 3e 69 ff 00 48 c3 12 c7 26 96 d2 09 20 36 4e 0f 6f 3b d6 57 b8 0e 17 49 a0 f0 7b 2a 59 f4 db ab a9 d6 2b 08 e4 95 9c 15 52 53 da 07 07 27 8c 0c 8c fd 6b cd d1 ba bc 0b 38 4b 79 08 49 bf 2c e2 32 18 fa 98 d4 46 06 e7 eb 5d 7f 4f ea 7d 3e f6 d2 e2 c3 a6 19 2c 56 64 2a 21 71 94 8d 8f 75 6e c7 38 c8 af 45 7b 75 6d 71 08 96 c5 13 a9 dc 96 79 73 21 d2 65 8c 63 50 1c 7b 97 27 e6 b1 cb f1 01 11 d8 41 c7 b2 47 a6 0a 01 96 ed dd d7 09 d2 fa a5 d7 4f b8 7f cb 95 d2 c4 6a 57 1b 36 0f f4 ae a2 ca e1 2e 61 81 71 24 ef 7a ad 03 85 93 3e 92 e3 24 85 db 1f d4 0c 63 93 42 b8 e8 90 f5 5b c5 bd e9 a8 f6 d6 53 b1 59 24 68 f2 89 31 ec 14 1c 85 27 ec 0d 52 df f0 ac 90 75 19 e1 b9 6d 50 10 f1 c7 78 84 af a7 30 d2 41 03 93 b9 c6 3b ef e2 b6 0d 53 03 6c 9c 25 16 30 94 9e f6 e3 a2 ca d6 36 b2 2c 96 fe 9e 54 6b 0c 37 39 d4 48 d8 93 8f b0 3d ab 19 ef 6e e4 b7 30 3c 99 88 bf aa cb 81 82 73 9a de fc 51 f8 78 74 bb 80 96 36 b3 69 48 f5 4b 2f a9 ad 58 6c 35 11 fc 99 39 db 8a e7 1b da 83 1b ec 46 33 de 9c 3c 9e 17 8b 94 5c dc 4b 71 39 9a 73 a9 d8 8c 9c 01 c7 c0 ae c6 ca f2 c8 c7 11 8e ee e1 e2 ba 6f 4f d1 25 49 0f 8f a8 23 9c 01 df 15 c5 49 8c 01 92 76 ef 5d 2d 8d cd 85 e7 4e b7 b7 36 70 cd 70 64 d2 62 48 9c 18 c9 1a 43 64 72 09 c7 71 8d cf 34 ec 02 ef ba f3 1f 47 0b 41 ba 3c fd 4a d2 79 16 78 5a 29 0b b2 3a 49 88 5c ed fa 94 ee a7 62 0f 34 ee 2d 7a 55 84 1d 47 a9 ad b4 f7 60 18 e0 8e d5 4e 14 11 90 17 c1 e7 73 e2 b1 3a b5 ca 47 d5 d5 a7 50 d6 7e 93 43 6b a1 c0 8d 94 ec 49 ff 00 4e 01 23 38 e4 56 87 4a 86 d6 3e 83 7b 63 6f 76 19 16 4f 51 19 d8 28 cb 0d 95 4f 7c e3 9f ed 54 f9 2f 6e 28 d6 f7 47 ad 5b cc d7 51 08 14 85 08 24 c1 c9 23 1e d3 e0 f8 f2 2b 9c b8 e9 31 d8 5e c5 f9 b8 8c a9 29 65 11 12 14 9d f0 0e 4f 1f 5a d4 b2 ff 00 a9 1f 4c de 27 a4 fa b2 62 78 c6 76 c6 0a 8f 07 c8 e2 b3 7a d4 8c d1 91 1d d9 78 2e 09 63 16 91 95 20 e3 1f d3 7f b5 21 19 0e 28 1c ad d9 ef d5 25 9e 2f e1 94 41 8d 43 71 8e 46 c3 ed fb 54 9b ef 52 da 47 d7 13 15 2b e9 94 db 51 27 9d f8 fa 57 2b 1d c4 d6 f0 47 13 c7 1c d1 91 ad 09 ce 48 3d b3 f1 5a b6 d2 c3 00 8a 42 22 68 d8 7b 91 4e e4 9e d8 f1 b7 d3 35 cf 9e 30 72 72 bb 70 96 96 b7 15 84 5b a9 6e fd 26 96 c9 5d 9c 91 fc 38 d0 b1 0d dc 1e c7 fb 57 3f 6f 6b 1b df 0f ce 5d 0b 77 2f a9 c9 88 b0 8c e4 e4 10 3f c7 9a e8 7f 33 1d b5 bc df 97 26 de 48 d7 da 58 7e a2 4f 61 b6 71 f3 e2 8b d2 e3 e9 d7 10 5d 5a f5 1f cb 8b f9 1d a4 79 91 77 56 18 c6 38 18 e7 8f f7 a9 b1 ed 6b 69 b8 59 b5 6d b7 83 d9 65 c7 d2 de 79 ee 3d 09 0c ab 0a e4 82 d8 04 1e 30 4f 3b 7e d5 8d 2a 6a 0e b1 8c 98 89 27 07 f5 2d 76 57 5f 86 45 cc eb ff 00 4f 96 13 09 4d 64 17 24 81 e3 be 7e c2 b8 f8 27 16 d7 85 d1 09 4c 91 a3 3c 8e 2b da 62 6c ac 73 10 e1 84 86 b6 d3 a5 49 c7 8c d5 58 63 6e 2a ba 80 18 03 fa d4 a2 7a 8e 06 a3 92 76 1e 6b a2 4a c0 02 ac 6a 44 98 db ef 5e 94 62 56 1c d1 1b d1 44 ca 39 2d fb d0 d9 83 64 9e 6b c0 da 62 28 aa d3 51 3e b8 f4 90 32 3b f7 22 94 14 68 48 0d 93 4c 50 22 d3 09 02 aa fa 8e 46 0e 30 0f 1f 39 a7 7a 74 01 92 47 07 db ab 49 3d 9c 78 a4 9e 44 31 6a 7c e4 1f 6a ff 00 93 44 b1 be 7b 75 01 62 32 0d 59 6f 81 40 14 8e 61 a4 ed d0 fc b4 c8 ac 42 a9 04 e0 01 90 3c 6d 43 f5 1e 48 c8 89 63 c9 5c 6b d4 41 3b e6 86 d2 47 72 5e 59 7d 54 63 df 1a 86 3f f3 54 86 29 9d 59 ed 92 46 4c e0 15 5d aa 05 c2 ec f6 55 11 74 d0 46 86 c9 e7 91 63 69 58 e4 82 49 1c 52 52 29 8a e1 95 73 94 6d 89 18 e0 ed 5d 0d a8 48 e0 59 ee a5 0b 95 ee 0f 3c 0d ff 00 bd 64 f5 17 86 7b c9 1a d5 4b 0c e4 b0 07 7f f3 a6 af 54 a1 1b c9 71 09 69 ee 24 b8 7d 72 90 4f 80 31 43 d8 0f f3 4f 74 f6 b5 8a 3b 89 ee 51 64 60 ba 63 46 e0 93 9d ff 00 e7 14 89 f1 b9 a0 c2 2c b4 0a 01 6b 70 c0 71 3c a9 04 81 dc 8a 34 2f a6 50 d9 c1 f3 42 fa 66 ac 30 0e 07 f5 aa 55 84 a0 a6 bd 5d 52 ae a5 04 63 00 81 8d fc d4 65 71 ad 4e ad f0 dd 81 aa 08 9e 48 88 c1 d2 33 83 47 83 a3 75 09 ac da e6 da d6 e2 55 45 0e da 13 85 3c 36 39 23 63 b8 cd 4e 82 f3 9c 42 22 e2 3f 4e 46 42 c3 f5 ee 30 18 7d 3e b5 a5 d2 2c ba 7d ff 00 53 92 5b c9 d1 2c d2 3d 4c a6 71 1b b6 76 01 49 e4 0e ff 00 6a 67 a6 74 ee 91 2d 94 37 49 2d c3 bb 2c 62 43 2e de fc f0 ab fc c8 c7 db b6 e0 80 7b d6 df 5b 53 d4 6d 6e ed 1e db d1 76 84 4d 6f 11 8d 43 24 b9 c9 50 46 e4 9c 10 71 58 65 d5 c6 c7 50 39 e3 d0 7d d3 86 39 ed c8 59 fd 3f a7 dd 74 5b 8b a9 63 be b7 8a 29 50 08 a4 e3 d4 8f 39 ca b7 00 8d b2 2b 46 2e b9 71 65 35 cc 64 96 bc d4 72 b2 b9 0a e0 63 12 0e 76 2b 80 7e 45 62 fe 15 fc cd dc 72 d8 e0 38 b6 61 38 89 86 71 f0 54 ff 00 29 e3 6e 33 b8 c1 ad 73 d5 21 92 e1 af 93 a7 a4 3f 96 61 a9 59 75 35 bf 39 65 c7 f2 f3 91 c1 ac 1a 86 bc bc f8 a7 8a c8 ef e4 7e bd c2 a4 5b 43 70 8f d4 12 ef ac d9 c6 aa c6 18 cd ca 5c 92 58 15 d2 41 07 03 e0 f6 3c 13 4d 4d 3d ec 29 71 d4 7a d4 b1 25 91 4f e1 5a 00 ac 5c 70 35 37 19 3b 7e f4 85 b5 dd a5 c5 9c bd 3e eb a7 8b 6b 7b 97 21 bd 2c 9d 59 dd 5b 27 73 f6 e3 1e 29 20 9f 87 ec e7 78 9a fb a8 db 18 c3 7a 96 b3 7f 12 29 90 7f 20 c8 c1 cf 00 d2 31 be 33 9d 11 37 f4 fb 90 6f ed 8c 5a f3 c6 de a0 16 d4 93 a3 b5 95 d7 fd 46 5b 35 b8 c2 c7 6e d8 f7 9e c3 e8 7c d6 ca 24 8b 70 81 d2 19 30 a4 99 06 30 92 77 50 3b 1c 1a e4 61 ea 3d 3b ac 75 0b 6b bb 58 63 b6 be 8f 52 88 e6 94 80 41 5c 0d 07 8c af 38 f9 ac f8 5e ef a6 c5 75 60 f2 e8 79 e6 02 24 92 e7 0c 98 27 2d ab 81 db 04 e3 27 eb 51 1a 36 ed da 4f 50 fa 1e fc 63 3f 33 ca 6d e4 9e 30 bb 0b b1 62 d3 cf 05 c4 d1 68 99 01 7f 70 d2 fd b3 e3 50 e2 b8 8e ad d2 ba 9d 92 38 82 ec 4f d3 d9 89 d5 03 fb 17 be ea 3f 49 fe 95 bb 07 52 fc a5 8c 77 5d 5a d5 6e e3 63 86 98 22 e6 23 9d 82 a8 f9 18 27 c9 f1 5a 36 17 56 3d 67 a8 5a dc 74 ff 00 4a d4 c1 ea ad d4 2c 80 34 8b 8c 72 36 20 12 3f c5 5f 42 f9 61 71 d8 ec 79 1c 8c 7a fc bf f3 84 93 c2 c7 f2 32 be 7b 05 ff 00 52 48 0d 8a dc b8 b5 90 fb 90 80 54 ef ce fc 1a 14 91 92 76 00 00 0e a1 9f d3 9a ec a5 fc 3b 0f 55 26 5e 9f 2c 51 36 0a b4 63 f4 b1 1c 60 f6 cd 2a 7f 0d bc 7d 2e fb f3 11 cc 97 b0 c8 82 35 63 88 e4 19 00 e0 f7 e7 9e db 57 5e 2d 63 26 66 e6 a9 b6 16 c4 68 ae 7a d2 1d 6e a3 91 ab 51 24 6d 81 fe 6b a1 b3 8b a7 5f 74 78 2c 6e a4 86 2b a6 99 fd 29 a3 52 d2 03 ff 00 bf ca 9e 36 f1 44 e9 df 87 75 41 7c b7 57 42 da 6b 29 00 90 a2 87 4d 18 dc f9 ff 00 6a f4 3f 85 26 1a 6e 61 eb 16 8c 11 f1 1c a8 f9 02 41 ba a8 f1 4b 2b b0 49 75 2a 6e 00 50 09 9b 6f c3 fd 32 cb a2 b3 75 79 13 d5 06 46 73 04 87 49 4e c7 ea 39 1d fb 1c d1 12 6b 99 ad 61 9e d2 42 50 44 0b 2c c0 3b 85 1f a5 c1 1c 9f 23 ea 36 35 85 79 2c e7 a8 88 bf 11 5a ba 47 70 c4 34 82 4f 66 7b 32 f6 fe bf b5 31 0c ab 15 f0 b1 71 e8 f5 35 5c 5b 5c e9 d0 97 19 e4 10 0e 9c 1e 3e bb d7 1b 52 5f 31 dc f3 7d f1 c5 7b e4 aa c4 03 46 13 d6 dd 41 d9 fa 8a da 5f c7 ee 7c 44 5b 11 7a 4a 32 1b 4a b7 07 3e 6a d1 75 99 95 92 d6 f6 e3 d3 65 61 a9 d1 04 aa a3 18 57 2c 77 0c 5f 23 22 b1 fa 5c d6 f7 7f 8a 65 17 36 b9 d5 23 63 4a ec ca c3 04 36 76 2b 9f 8e 6b 42 6b 36 bd ea 4d 0e a0 2d 4b 13 20 8b 08 e3 1b 68 07 1b 00 54 1a 93 80 8d f5 c5 84 f5 b8 5a e8 ed 6f 2d 2e 6d 4b 4f 19 b6 59 43 1f 76 4e ad 79 5d d7 1c 12 09 c5 64 75 3f c2 76 97 fd 2a 05 e9 52 5a 25 e5 b2 22 ca e1 b0 b3 9d 3d bc 13 b1 cf 7c ef 5c ec 77 46 d1 4c ab 09 b6 6d 1a 58 8b 82 64 59 54 ff 00 22 fc 67 38 3b 6f b5 6e 47 d7 e2 3a 05 dd 99 86 48 d8 19 bd d9 d6 1f 74 c6 fc e7 93 c0 c7 da b7 33 51 33 05 34 03 f6 f4 51 31 b5 72 8d d0 3a 91 b9 5b 7f c9 4c 27 91 59 d2 36 01 4b 85 e7 1e 7f cd 2b 6f 2d d7 4b bc 2d 1e a8 e6 8c 95 64 60 47 d4 11 fe 2b e9 91 98 3a bc 0b 27 4f b0 f4 ae ed d1 bd 39 3d 32 a2 26 20 83 86 3f a8 1c 93 8d b8 cd 73 cb f8 72 de dd ed ed 2e 3a 7c 97 27 48 fc d5 e2 4e 4a c6 db 93 b0 e0 e3 1c f9 15 d0 8f 56 d3 93 8f 79 fb 63 ee a2 5a 41 5c b4 17 89 27 51 85 fa a3 48 f6 82 52 ee 89 be 90 4e 4e 90 78 df 7a ed 3f 10 f4 f9 e2 e8 97 08 64 81 6c fd 92 c3 70 a8 15 41 dc 9e 38 3c 6f b0 de 85 ff 00 ec 4e 9d 72 a1 ac ba 9c e4 31 04 6a 8c 65 57 c9 1b 13 5a f6 ad 61 f8 72 dd 7a 7d c5 ec d7 08 e3 1e 91 8c b6 91 8c eb 23 73 8d be 83 c5 5b c6 bf c3 94 37 11 ca c4 e9 bd 3e 3f c4 3d 12 ca 78 6e ee 20 b8 89 de 09 64 00 1f 4d 98 64 6d fe 83 b0 db 8c d7 3b 1f e1 fe ae f3 cd 03 40 62 68 c3 b9 69 49 55 6d 27 1b 1e f9 26 be 87 d3 ba 3d 97 4c fc cd d7 48 0c 05 ca 00 c3 5e b8 b9 ce c3 91 df 6e d4 59 95 a6 59 25 49 23 92 45 52 aa b2 13 86 ce db e3 80 46 77 fa 54 5f a8 37 41 78 15 f3 f1 6d 1c 10 47 6f 23 af a4 08 0e c0 1d 2c dc e0 e7 83 fd c5 27 6d 3c 2b 7b 15 c1 4f 42 20 37 1b b6 0f 70 3c 7f 8a ee e6 fc 1e ac b3 7e 52 f9 84 9a 4b a2 48 a3 d3 60 49 d8 f7 1c e3 35 c7 de a7 fd 3e 59 2c 24 4d 0e 18 7f dc 40 59 33 be 0f c7 8f ad 10 2c 1b ca d8 fd 48 73 9a 1b 80 02 77 d4 2f 6c 8d 20 8e 48 94 86 46 61 b0 1d f2 4f c9 e6 97 ea 50 c7 a4 df e1 95 64 7c 03 83 90 46 db 78 1f d6 97 2b 04 51 3a 9b c6 75 28 7d aa db 1f 23 1e 0e df b5 3b d2 ae 1e 4b 76 b6 9d 09 86 45 cc 4c c4 31 3a 78 0a 09 e7 b5 64 7b 4b 72 de 2f e4 b5 49 37 89 40 85 ee 9b d5 de 0b 09 60 70 23 b7 91 f1 24 e2 63 af 03 f9 70 37 cf f7 a4 a5 96 e6 c8 9e a0 51 23 8e e6 47 68 27 31 02 cc 40 c1 0a 7b 03 df e6 88 ab d2 e5 93 d7 8d 8a fa 67 4b 19 17 48 76 60 74 e4 af 0b b1 ed cd 0e c7 a3 19 61 22 e5 a5 3a 41 f4 d7 56 ca a7 c7 6d f9 aa 33 60 b2 56 37 35 c4 f4 95 cb ef 9d ea fa 42 a9 6c f3 55 63 a4 e3 7a ab 1d 4f 90 3e 80 57 45 60 e5 78 1d f3 52 4e 45 1e de 38 5a 41 eb 86 03 be 2b 46 68 fa 4f a3 88 88 d7 f7 a5 2e ae c8 e1 62 d5 93 1a 86 ac e3 e2 88 f1 27 aa e2 26 25 47 e9 24 62 a5 60 3a 03 93 b1 d8 6d cd 32 04 85 64 c3 9d 2c 07 3c f7 ab 29 00 69 1f 4a 81 09 d8 21 1b 8e 68 92 20 8f 8c 6e 38 a4 2e 17 49 b6 9a b5 78 18 2c 6c 18 91 83 9c 82 69 bb 17 9e 19 8a c6 09 89 bb f0 3e 0d 27 6a 19 ee 14 21 c1 3d fc 56 84 37 18 90 80 09 20 0d ce fc d4 e5 6b cb 70 db 0b cc 7b 5a ef c5 45 5e f2 6d 76 da e4 8c 93 fc a4 1c 6f db 3e 69 3b 45 71 65 3c a8 a7 04 10 4b 0d 88 f8 f2 6b 42 f0 c7 79 61 ac 4f b2 9c b2 08 ff 00 48 f2 49 3d fe 99 cf c5 28 f0 a1 b4 06 32 51 54 1c 87 6c f7 f8 ee 76 ff 00 6a 68 99 b1 a0 55 7d 6d 2b e5 de ee 6f e9 4b 3c 65 b5 1e 7b d4 80 32 09 ef 46 b3 58 0d c6 2e 83 fa 5a 49 21 4e 09 db 6c 7d e8 04 63 0a e3 19 ab a2 5d d9 4c aa f1 be 86 c8 c7 6f 15 20 81 e7 9a d1 36 d0 3c 66 e1 dc fa 1b 80 c4 e4 96 c7 6e ff 00 bd 66 2c 87 63 da bc 0a 46 b9 39 6a b3 49 38 82 18 da 49 59 86 84 40 49 63 e0 0e fc 57 59 7b 7d d5 25 8e d4 5e 28 8a 6c 19 20 b8 89 34 c9 00 1d 9d 07 f2 63 90 3b 72 36 ac 7f c3 d3 5a f4 d5 9a f6 4e a1 14 32 38 31 a2 08 0c 92 a8 23 72 bd 97 3c 67 7f b5 3a d7 71 fa 46 54 bd 5b 94 63 ab 44 df c2 60 7c 8d b2 0f 86 07 eb 9a e5 6b 9c 49 0d 03 df e9 ee 96 a8 00 36 49 52 5a e7 aa 5d a5 c4 87 d4 b9 83 dd e8 b3 86 8d 80 ee 84 72 a7 03 8d c1 c7 6a 14 e2 79 64 92 f2 6f 51 a6 b8 97 d9 0e 83 ec d5 92 30 dd be 0f 91 53 2c 17 0b 6e f2 a7 a6 89 23 19 22 f5 8a 8f 70 dc 95 75 f6 ee 36 23 6d 5f 5a 0d c5 cc 6a f1 34 62 48 5d 63 08 ea 58 18 f2 3b e7 82 70 41 f2 0d 61 68 37 d3 5e fd ff 00 6b 41 57 83 f1 15 c5 bb 7a 7d 62 dd fd 66 5d 22 ee 25 55 9c 2e db 67 86 1e 47 7a ab 7e 2e ea f2 48 2d e0 bc 49 22 d4 51 16 68 97 25 7b 02 c7 cf cd 00 35 d5 ed b8 86 66 8c 46 23 ff 00 d3 bd cf e8 6d 1c 80 df ca 71 fb d6 54 b7 32 c6 fa 3d 38 93 6c 63 d3 04 1f e9 c5 6c 8e 18 dd 63 68 f9 76 fb 7f 0a 24 96 f2 57 40 dd 6a ce fe 11 67 d7 ad 4c 6f 1b 6c f6 e4 a3 46 40 c0 ca 7c 0d aa b6 72 da 5c da 18 3a 9f 16 db db dd 32 30 f5 97 b2 b6 e0 85 f2 06 fe 37 ac 1f cf 4e f1 10 59 84 d9 1a 5d 48 1b 63 8f ed 5d 07 46 ea b2 db dc 06 e9 de 94 31 49 1a 8b 93 78 72 a2 65 19 18 27 24 71 b7 c9 fd 81 84 43 90 2b bf 38 bf 4f 2b e3 f6 44 3b 76 39 44 bc ba e9 7d 2f a8 7b e2 92 4b a1 0a 6d 13 02 88 74 fb 4a 13 df 7c e4 8c 8c 63 9a 4f a3 f5 3b f8 0b b5 c4 80 46 c0 db ac d3 20 78 e3 63 be 18 7c f7 35 71 79 6f 75 78 22 4b 68 e0 06 6d 44 9f d3 14 d9 3e f5 c6 e4 11 80 47 1b 52 57 0c 2d 63 8d 2e a3 74 5b a1 eb 3e 85 c0 c1 62 40 00 ed 90 46 47 d7 14 82 8f 4d 67 1f 3f a2 35 59 4d c9 3d c0 89 96 19 4d ab 99 c0 11 11 ec 56 03 62 be 06 ff 00 b1 07 b5 68 25 e5 b5 b8 6e 97 d6 ba 6d cc 6b e9 17 17 10 81 ea c6 7f 99 b2 bc af f8 e6 b3 9b a9 da 35 cc 76 b7 17 33 cf 68 63 00 ca c0 12 87 91 91 8f 70 53 fd 09 a6 e4 9d 7a 61 ca 49 20 74 c3 5b ba cb 90 57 6d 51 e4 f2 08 dd 4f db b5 49 c1 cd 70 b6 e7 9f 67 f5 b0 53 d0 70 c1 5d 87 43 e9 d6 4b d2 ad e7 e9 b7 0c af a4 ff 00 ea 63 50 ac f9 ce 49 07 23 04 71 e2 b5 e4 8d d2 15 77 2b 36 da 74 4b bb 6f d8 37 9d b8 3d eb 97 8b f1 14 7d 0a e8 db 75 08 ad ca 4c 19 95 ad c6 08 3d 8b 2f 03 3f 14 58 bf 17 74 b9 ac 58 99 65 41 21 08 c8 e4 33 46 79 27 4e 37 1f 7c ed 51 f0 e5 79 f1 5d f8 4f af ec 3d fe 8a 60 80 76 f9 2d 3b ce a5 04 0a b2 5c 43 89 ee c9 54 95 57 d8 e0 67 08 de 09 19 1b f7 ac cb 87 9e fa 4b 41 24 4a b6 b7 48 c6 48 d4 14 d0 aa 72 8c 0e 31 a8 10 3e 70 7b e2 a6 f2 69 2f 6c 75 f4 b7 86 ed a3 6d 41 41 c6 54 8e 77 ef 8c d3 30 f5 35 b7 e8 3e ac 92 0f c8 c5 1e 96 90 ae 59 89 e0 28 1e 3b e6 b3 b2 69 24 19 e7 f8 e0 91 8c f1 5d d5 8b 40 c8 49 f5 0b 7b 6e ac 93 d9 89 9c 3e 91 ea c0 40 18 3c 89 70 7b f1 c7 cd 61 74 f4 bb b2 66 b3 eb 36 71 cd 63 1c 9a 35 9d cd b1 3f a4 8c ef a4 ed 83 db ed 4f 75 6b ae 9e b2 cb 0a de 47 65 77 2a 23 09 c8 f5 14 82 32 a7 3c 8d be 3e 69 98 2d ae ba 8f 4c 36 f7 f7 90 3b 81 a2 3b ab 67 52 25 1d 8e 7c f9 1d eb d6 62 8e 9d c1 ae 45 10 7c c5 7b f3 44 51 76 12 33 48 dd 36 48 ee 20 95 ee 8c 79 16 cc 00 6d b2 43 c4 71 ce 0e 08 ef 55 b8 9a fb a9 d8 b0 b6 b6 48 c5 f2 92 da 5b 00 b0 c6 ad cf 1b 63 eb 40 fc ac 48 e9 fc 77 b6 bc 40 59 91 c6 15 9d 76 12 28 ee 1b 1a 4f da 8d 6d d4 8b 2b 5c a7 a2 9d 34 48 cb 34 18 f7 07 c6 fa 4f cf f9 a6 db ff 00 4d 16 47 bf 7f b2 74 ac 5d 3e 08 35 4f 3d e5 bc af 01 4d 13 89 74 34 64 0f d2 0e 77 6c 8e f5 9a d0 ad ab 7e 60 42 97 6f 28 72 9a 72 e0 ef bb 0c f7 1b f3 dc 66 ba 32 f6 21 ad 63 bd e9 77 08 a6 2d 71 a2 80 e5 54 1d b5 01 fd b7 aa 49 0c 28 f2 37 fd 30 c8 0c 99 0f 31 0a 35 1c 90 31 d8 1c 9c f6 3f 6a a3 27 70 39 bf cb f9 4a 58 0f 0b 32 cf a8 5d f4 eb a4 9c ac a7 a7 6a 0c d2 e5 e4 07 2b c8 c9 07 3b fe f5 d8 59 75 2e 8f 37 e5 ee 64 bc b9 76 c0 d5 12 ae 95 39 1b 31 5d ce 08 ee 49 cd 73 ab 23 c7 33 3c a9 66 cc 54 a6 a9 25 c9 43 b6 ca 0e c4 83 8f f9 b5 6a f4 bb 3e a5 6d 3b 5f 59 b8 76 94 30 95 42 ae 85 72 46 43 15 e0 03 92 07 cf 6a bb 24 68 cf 07 df cf df 92 9b d8 9f 79 67 e9 cb 2d cd 8f 4e 77 b2 79 19 92 28 b2 0b 3f 90 0f 00 e0 6d f1 df 34 15 5b 3e b7 2f a7 d5 ba 75 e5 95 c1 3e d5 2a 40 c9 03 dc ad c0 f9 1c 71 5b 2b 3c 73 44 d1 c9 24 9e 88 21 50 08 ce 82 40 20 8c 8e 47 73 f6 de b9 fe b0 7a b4 61 a3 8a 61 37 4f 91 d5 5d dd 41 64 7d b2 3d 33 c8 cf 61 9c f9 06 b5 c7 33 5e 03 87 cf 2b 33 98 e0 69 3d 6d d2 a7 b3 88 43 0c 4f 77 0c ac 49 95 df d2 2a 49 dc 32 f8 db 91 be 6b 62 2b 58 2d 4e 11 02 2e 80 da b0 30 3e 2b 9c b8 be bd b6 8a d5 6e 66 53 24 a3 d3 83 41 62 1f 27 73 81 92 54 0f 9c 8f 9a e8 2f a5 16 96 64 c8 42 7a 6b 95 73 13 c8 30 06 72 70 0f f5 a0 d7 35 ee de 05 fa a3 b4 b7 04 ac 4b 2e a5 2c 9f 8a 3a 95 a1 b7 9b 11 46 34 ea d8 81 b6 73 b9 03 39 04 56 37 53 e8 46 f6 ea ea e6 f3 a8 24 97 2c 08 8c 2a 69 c6 9e 4b 6d d8 78 ad 6b 5e ad d1 ee 9a e7 f2 97 0c 4c 8c 1e 62 f1 90 64 6f fc 7f 6a e7 62 1d 4e fe ea 6b b8 58 5c 28 05 1d 16 7d 2e 07 18 df f7 db 6c 53 b5 ce 0e 20 0a c2 72 d0 b9 8b b5 99 24 10 ca 72 63 d8 63 8f b7 91 5a 36 17 b0 5b db 05 97 d4 66 2a 63 d8 fe 90 41 e3 ef 8a 9e a1 61 72 d7 68 ca 92 c8 65 50 cb 98 b4 11 e4 11 c0 23 15 ac 3f 09 c4 60 4f fd 53 c5 23 01 a9 a4 c6 85 27 7c 9c 76 ad 12 ba 32 d0 d7 9e 50 8c b9 a4 96 ae 5e e2 59 6e e7 67 21 99 88 00 e3 c0 fa 57 4f 65 67 38 e8 8a f1 6a 8f d4 5d 3b b9 2e 84 1f ed f1 f3 5a 3d 22 d2 ce c6 c6 68 c4 a8 d2 e9 62 da 97 04 f6 27 27 81 df 15 d6 fe 1c 81 1b a6 a5 c3 c6 09 94 6c 58 86 3a 46 c0 54 fc 46 ca ed 8d ec 9c 7f ac 6e 3c 95 f0 76 60 46 f9 3f 7a 8d bb 31 1f 5a 93 be 6a 95 b5 65 08 d1 6d b7 73 f3 45 7f 1c e3 6a 1c 00 67 81 ba 9a 93 ed 7d 23 8a 05 2d 59 56 40 a0 10 5c 02 3b 79 ab ea 3a 40 24 e0 71 bf 15 50 00 5e 3b d4 90 36 db b5 30 42 97 a4 c8 c0 52 49 63 b0 a8 1a dc 69 27 24 54 36 cc 08 e7 14 c4 6a bf 95 57 c7 b9 8e 09 a5 73 83 45 26 00 95 78 98 40 d1 95 df 7c 93 5a 06 09 66 7d 76 91 be 4c 61 9b 40 d8 8e c7 27 fc 52 56 08 b2 39 d6 33 53 3c d2 2f 4f 0c ae 41 12 64 63 ef 54 19 69 05 65 7b 7a c1 0a f3 c6 e2 de 4f 79 46 1b 18 9b 1b 71 92 73 e7 6d c5 56 e6 42 f1 46 ce 00 d8 e1 43 0d bc d6 c3 e3 f3 76 c4 80 48 9b d3 19 19 f6 e9 1b 7d 37 35 b0 61 85 e3 57 68 a3 2c b8 61 95 1b 1e 2a 60 11 c9 44 cd b4 8c 2e 5b a3 da 09 6e 9b f3 52 2c 5e c2 72 73 ed 5e 49 20 7c 50 ca c1 3c 89 71 3c c8 e8 65 d2 10 02 a4 af 9f 81 5b bd 71 55 ba 70 72 06 af 54 1c 8d 89 c8 c1 ae 76 e7 79 ca f6 48 c6 91 e3 7a f0 90 6e 0d ae 53 86 97 b0 c9 6b 6a 58 63 93 08 8a ad ab 8c 9d 80 c7 3b 56 27 53 8a 28 ae 3f 82 49 07 9d b6 1f 4a 7f a2 31 c3 6f e7 fb 52 7d 67 ff 00 cb fa d5 09 c9 53 65 dd 21 20 51 6e 77 cb 12 36 f1 56 82 59 92 4d 71 dc c9 1b 46 b8 0c b9 38 1e 36 e0 7d 6b 42 d2 08 8d ac 24 c6 32 77 fe b8 ac ee a2 04 77 57 22 3f 60 d6 06 17 61 c0 a5 c1 c1 16 9e cd d8 29 e8 ef 23 79 34 a4 77 32 6b 1a b4 7a fa 70 40 dd b1 8d 24 6d 9d e8 d6 d7 9f 94 6b 74 9a c9 66 8e 44 67 21 1c 95 94 1e 4e 38 0d d8 e3 c6 08 ac 28 3f ee a6 fd eb 53 a3 ff 00 1e 0e a3 6f 37 be 24 81 a7 55 3f ca e0 fe a1 e0 d6 09 e1 60 04 d6 3e bf 25 ba 27 b8 e1 6b 45 3d 95 dd a4 d6 b6 4f fc 2b 9c c7 aa 7c e9 0d fc 99 3d 98 71 9e e0 0e 69 3b ae 8f 12 28 8c eb 82 60 02 3a dc b8 01 1b b1 0f dd 4e f5 6e 81 34 92 f4 9b df 50 86 d6 18 36 40 f7 00 06 33 f4 a5 af a7 96 eb a6 5a 35 c4 8d 21 1a 80 2c 6b 1b 5a e8 e5 2c 69 a1 7f b7 bf 78 56 34 e6 6e 21 64 cd 11 82 62 9a 91 8a 9f e5 21 87 ef c1 af 43 2c 90 cc b2 c4 74 ba 9c 83 8c d3 16 a4 cb 69 73 1c 87 52 c4 a1 90 1f e5 24 ef 8a 54 0f 75 75 41 dd 6d 72 c8 45 51 09 d8 6f dd 7a 9f e7 12 de 3d 4d 92 62 8c 10 a7 6d f1 8d c7 9a d4 b8 96 3b 6e 9f 0c 31 f4 a7 6b 7b c5 2f 1c 8d 72 d2 29 db 18 5d bd a4 1e 7b fd a9 9f ff 00 4d 91 5f f1 5a 87 50 d8 b7 90 ee 3e 95 a7 d4 3a 65 94 7f 87 7a 94 89 00 56 8e 79 19 30 4f b4 83 8c 81 58 b5 0e 8e 39 58 d2 39 c7 bf 92 b3 37 16 92 0f 0b 86 96 39 93 77 46 1d b3 8a 22 3b 3a c3 0b be a8 b7 01 49 c6 9f 20 1a d6 b1 3e a2 45 af dd a9 7d d9 ef 58 8e 02 c8 ea 36 01 88 03 ef 5a 6c 3c 29 34 90 b7 3a 44 ec f1 cb 0a d8 47 76 fa b5 b4 8e c5 5d 33 ed 39 c6 ec b8 00 fc 56 ed 95 c7 a9 0d c2 cf d3 16 28 d4 05 68 e2 b6 4c 05 1d fd db b6 33 9e f5 c7 59 4f 2c 1d 52 de 78 9c a4 a2 54 21 87 c9 00 ff 00 7a ea ba bd dd c7 fd 15 67 f5 4f a8 92 eb 46 ff 00 49 d4 eb b7 db 6a e6 ea 62 1b c3 6b f1 7a 9c 1f d1 6a 8c d8 27 c9 13 a5 74 6b e8 65 17 5d 0a f6 09 49 8b 2b 1e a2 19 c0 3b fb 4f 1b 1e 33 b1 ac db a4 b8 b5 86 4b 0b d8 67 d4 fb da 48 9e d3 a8 9d d4 f6 c7 90 6b 43 f0 fa 89 7f ea 6e e3 df 04 10 b4 4e 36 64 25 ce 70 46 e3 3d eb b1 ea 96 d0 4f d3 84 b2 c6 ac e2 d4 cc 18 ff 00 ac 01 86 fa ee 68 78 64 53 8e 4f 3f c7 bf 52 bc 08 ba 0b e6 d7 1d 35 a1 ea 30 d8 58 46 6f 2e c0 74 78 9a 20 d8 39 f3 b7 1e 7b 7c 52 5f 95 bf e9 93 4a 2e 2c dd 51 5c 24 d1 49 b0 39 e0 1f ae 31 aa 9f e9 92 bd af e2 8e 97 25 bb 18 dc ca 88 48 ee 0b 15 23 f6 da bb 2e b7 ff 00 a9 fc 51 73 69 38 0f 6e 6c 86 63 23 6d f2 4f f6 1f b5 5e 49 7c 38 ac e7 ce fc 92 35 b6 fa 18 5c 9a 08 a7 8d 20 88 cd 35 a4 44 c9 25 b4 b9 f5 e0 ec e1 5b 96 03 9c 7c 51 05 cc ad 21 b8 b6 f4 1b f2 0a ac e5 81 0d 2a 0e 1b 03 ce c4 9e d8 aa a1 3f f4 6b 7b c0 48 b8 54 8e 41 26 7d c1 84 9a 33 9f fe 3b 7c d4 f5 32 57 d1 0a 4a 8f ca b8 f6 9c 6d ab 8d be a6 b1 f2 ea f5 23 f9 f7 f7 57 e0 5a 7d a2 b5 21 c5 e3 ce 5a 74 66 99 56 e3 5a 40 0f bb 29 8f 20 63 3d f7 a3 38 b7 82 de e6 19 60 b9 8b d0 8d 74 b3 8d 40 86 1b 1f af 1c 71 42 e8 8d a3 a2 d8 32 05 56 77 65 62 14 64 8f 06 9c be 95 ed ee ae e1 80 e8 8c 40 58 28 03 19 cf 35 95 c4 87 16 7e fe 46 95 5a 31 6b 1a e2 17 69 42 1b e8 7d 58 61 41 18 94 ed a5 b1 ab 7f 3d a9 db 3b e8 a0 bc 92 0b 79 c5 bb c2 8d 96 8d 8c 89 30 1f a4 91 8c ea 51 c9 ef 56 b4 b6 80 c1 d3 1c c4 a5 e6 04 c8 c4 6e d8 19 1b fd 77 a7 6d 3a 75 9e 5e 5f cb a7 a8 26 6c 37 7d c6 ff 00 be 4e 7c d1 7c cd 0d 2d 77 ec 94 30 93 68 d1 f5 7b a8 ba df 4d 7b 79 45 cd 9d dc 5e 9c cc 20 31 8f 50 72 c3 3c 03 90 7c 56 9e 6f 2d 09 9f a9 dc 5a bd bb c2 4b 49 a4 86 8b 27 db 80 76 23 b6 3c 8a ca fc 25 0c 77 36 f7 d6 f3 af a9 14 33 93 1a 93 fa 30 36 c7 8f b5 74 b7 ca a1 a1 5d 2a 54 0d 40 11 91 9a 79 25 68 0e b6 f1 5f af 3f 3a 50 da 6e ad 67 dc 43 1f 51 b5 f4 11 ee 21 5c 32 ca da 34 cb a8 11 b1 d5 c0 3f 14 95 cf 49 b9 b7 9e 3b 6e 8d f8 8e ea 25 96 40 86 09 3f 88 15 77 c9 0d f6 34 c7 49 9a 5b 9b 5b 2f cc 3b 49 a9 35 1d 47 39 23 56 33 fb 0a 6a eb ff 00 e3 65 bd c0 fc c2 a1 d3 26 37 1b 55 19 ac 74 51 ee ac 5d 7d bd f9 20 58 0b a9 73 bd 67 aa da f4 c9 de de 48 1a e2 69 31 20 24 e0 27 6e fc e7 7d c7 14 85 8f 55 ea 45 95 62 b5 85 11 df 26 38 d8 2c 87 24 10 40 3c fe d5 db f4 62 2e ba 35 a5 d5 c2 a4 b3 cb 1a 87 91 94 12 c3 3c 1a e3 bf 10 5a 5b da fe 32 8f f2 f1 2c 5a 91 64 21 46 06 a2 71 9f 8a ea 46 c0 39 e6 94 dc e2 4d 2d 2b c3 6f 0c f7 97 2c d7 02 59 51 4c da d7 dc 18 1e 30 36 c8 a4 ac dc 5d 46 ff 00 94 1e 88 88 eb 55 6f 68 7d ff 00 57 de b9 99 ae ee 6d fa a5 c9 86 79 14 b6 b0 4e a3 bd 31 d2 fa 95 ec 97 71 87 b9 72 14 e9 1b f0 0f 6f a7 c5 2c b1 3f 69 20 a7 63 c0 a6 ae c6 c7 a7 25 f7 51 3a 10 44 c7 ff 00 c8 c8 20 f1 c8 fe df 3d eb a6 b7 b5 fc 94 11 5b 5b 4a 16 38 76 55 68 b2 31 e3 23 8a 1f 45 55 36 3e b1 00 ca 5c 82 e7 73 8c f1 9a d3 1d ea 9a 76 7f ac 1e e7 3f ba 9c 8e ea a5 ff d9>
`;

exports[
  `tests/onfinalize.test.js TAP upload finalize docx > docx first result 1`
] = `
Object {
  "payload": Object {
    "name": "test",
    "readingOrder": Array [
      Object {
        "encodingFormat": "text/html",
        "rel": Array [],
        "url": "index.html",
      },
    ],
    "resources": Array [
      Object {
        "encodingFormat": "text/html",
        "rel": Array [
          "alternate",
        ],
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/documents/test-1234/index.html",
      },
      Object {
        "encodingFormat": "image/png",
        "rel": Array [],
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/documents/test-1234/1.png",
      },
      Object {
        "encodingFormat": "contentType",
        "rel": Array [
          "alternate",
        ],
        "type": "LinkedResource",
        "url": "https://storage.googleapis.com/test-bucket/user/user-123/publications/test-1234/test.docx",
      },
    ],
    "wordCount": 581,
  },
  "publication": "test-1234",
  "userId": "user-123",
}
`;