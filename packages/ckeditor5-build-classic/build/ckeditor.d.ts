/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { BalloonEditor as BalloonEditorBase } from '@ckeditor/ckeditor5-editor-balloon';
import { DecoupledEditor as DecoupledEditorBase } from '@ckeditor/ckeditor5-editor-decoupled';
declare class ClassicEditor extends ClassicEditorBase {
}
declare class BalloonEditor extends BalloonEditorBase {
}
declare class DocumentEditor extends DecoupledEditorBase {
}
declare const _default: {
    ClassicEditor: typeof ClassicEditor;
    BalloonEditor: typeof BalloonEditor;
    DocumentEditor: typeof DocumentEditor;
};
export default _default;
