import React from "react";
import ReactQuill, { Quill } from "react-quill";
import quillEmoji from "quill-emoji";
// import "quill-emoji/dist/quill-emoji.js";
import "quill-emoji/dist/quill-emoji.css";
const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register(
  {
    "formats/emoji": EmojiBlot,
    "modules/emoji-shortname": ShortNameEmoji,
    "modules/emoji-toolbar": ToolbarEmoji,
    "modules/emoji-textarea": TextAreaEmoji,
  },
  true,
);

const ReactQuillWithEmoji = ({ ...props }) => {
  const modules = {
    toolbar: [
      [{ font: [] }, { header: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      ["emoji"],
      ["link", "image"],
      ["clean"],
    ],
    "emoji-toolbar": true,
    "emoji-textarea": true,
    "emoji-shortname": true,
  };

  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "color",
    "background",
    "list",
    "indent",
    "align",
    "link",
    "image",
    "clean",
    "emoji",
  ];

  return <ReactQuill {...props} {...{ modules, formats }} />;
};

export default ReactQuillWithEmoji;
