import { Component, createRef, RefObject } from 'preact';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { StreamLanguage } from '@codemirror/language';
import { json } from '@codemirror/lang-json';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';

import { basicEditorSetup } from '~/src/components/basicEditorSetup';

export type CodeEditorProps = {
  codeToDisplay: string;
  language: 'json' | 'yaml';
};

export type CodeEditorState = {
  editorState: EditorState;
  editorView: EditorView;
};

export default class CodeEditor extends Component<
  CodeEditorProps,
  CodeEditorState
> {
  private rootElementRef: RefObject<HTMLDivElement>;
  constructor(props: CodeEditorProps) {
    super(props);

    const editorState = EditorState.create({
      extensions: [basicEditorSetup, this.setLanguage(this.props.language)],
      doc: this.props.codeToDisplay,
    });

    this.state = {
      editorState,
      editorView: new EditorView({ state: editorState }),
    };

    this.rootElementRef = createRef<HTMLDivElement>();
  }

  componentDidMount() {
    if (this.rootElementRef.current) {
      this.rootElementRef.current.appendChild(this.state.editorView.dom);
    }
  }

  render() {
    return <div class="code-editor" ref={this.rootElementRef}></div>;
  }

  private setLanguage(choice: 'json' | 'yaml') {
    if (choice === 'json') {
      return json();
    } else if (choice === 'yaml') {
      return StreamLanguage.define(yaml);
    } else {
      throw new TypeError(`Language ${choice} is not supported`);
    }
  }
}
