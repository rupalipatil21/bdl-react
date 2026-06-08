// components/TiptapEditor.tsx
"use client";

import StarterKit from "@tiptap/starter-kit";
import {
  RichTextEditor,
  MenuControlsContainer,
  MenuSelectHeading,
  MenuDivider,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonBulletedList,
  RichTextEditorRef,
} from "mui-tiptap";
import { useRef } from "react";

type Props = {
  content: string;
};

export default function TiptapEditor({ content }: Props) {
  const rteRef = useRef<RichTextEditorRef>(null);

  return (
    <RichTextEditor
      ref={rteRef}
      extensions={[
        StarterKit.configure({
          orderedList: {
            keepMarks: true,
            keepAttributes: false,
          },
          bulletList: {
            keepMarks: true,
            keepAttributes: false,
          },
        }),
      ]}
      renderControls={() => (
        <MenuControlsContainer>
          <MenuSelectHeading />
          <MenuDivider />
          <MenuButtonBold />
          <MenuButtonItalic />
          <MenuButtonOrderedList />
          <MenuButtonBulletedList />
        </MenuControlsContainer>
      )}
      immediatelyRender={false}
      content={content}
    />
  );
}