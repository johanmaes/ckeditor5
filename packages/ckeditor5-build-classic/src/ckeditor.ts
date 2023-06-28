/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { Style } from '@ckeditor/ckeditor5-style';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SpecialCharacters } from '@ckeditor/ckeditor5-special-characters';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { BalloonEditor as BalloonEditorBase } from '@ckeditor/ckeditor5-editor-balloon';
import { DecoupledEditor as DecoupledEditorBase } from '@ckeditor/ckeditor5-editor-decoupled';

import {
	FontSize,
	FontFamily,
	FontColor,
	FontBackgroundColor,
	Font,
} from '@ckeditor/ckeditor5-font';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
	Bold,
	Code,
	Italic,
	Strikethrough,
	Subscript,
	Superscript,
	Underline,
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
	AutoImage,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing,
} from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import {
	DocumentList,
	DocumentListProperties,
	List,
	ListProperties,
} from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import {
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
} from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Template } from '@ckeditor/ckeditor5-ui';

class ClassicEditor extends ClassicEditorBase {}
class BalloonEditor extends BalloonEditorBase {}
class DocumentEditor extends DecoupledEditorBase {}

const plugins = [
	Autoformat,
	BlockQuote,
	Bold,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	CodeBlock,
	Indent,
	Italic,
	Link,
	DocumentList,
	MediaEmbed,
	Paragraph,
	Table,
	TableToolbar,
	Alignment,
	AutoImage,
	AutoLink,
	CKBox,
	CloudServices,
	Code,
	Essentials,
	FindAndReplace,
	Font,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	ImageInsert,
	ImageResize,
	ImageUpload,
	IndentBlock,
	GeneralHtmlSupport,
	LinkImage,
	DocumentListProperties,
	Mention,
	PageBreak,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	SourceEditing,
	SpecialCharacters,
	Style,
	Strikethrough,
	Subscript,
	Superscript,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	Template,
	TextTransformation,
	Underline,
	WordCount,
];

const config = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'|',
			'exportPdf',
			'exportWord',
			'importWord',
			'|',
			'formatPainter',
			'findAndReplace',
			'selectAll',
			'|',
			'heading',
			'|',
			'style',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'-',
			'bold',
			'italic',
			'underline',
			{
				label: 'Formatting',
				icon: 'text',
				items: [
					'strikethrough',
					'subscript',
					'superscript',
					'code',
					'|',
					'removeFormat',
				],
			},
			'|',
			'specialCharacters',
			'horizontalLine',
			'pageBreak',
			'|',
			'link',
			'insertImage',
			'ckbox',
			'insertTable',
			'insertTemplate',
			{
				label: 'Insert',
				icon: 'plus',
				items: [
					'highlight',
					'blockQuote',
					'mediaEmbed',
					'codeBlock',
					'htmlEmbed',
				],
			},
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
		],
		shouldNotGroupWhenFull: true,
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
		],
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};

ClassicEditor.builtinPlugins = plugins;
BalloonEditor.builtinPlugins = plugins;
DocumentEditor.builtinPlugins = plugins;

ClassicEditor.defaultConfig = config;
BalloonEditor.defaultConfig = config;
DocumentEditor.defaultConfig = config;

export default { ClassicEditor, BalloonEditor, DocumentEditor };
