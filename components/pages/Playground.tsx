import Editor, { OnMount, loader } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import prettier from "prettier";
import parserTypeScript from "prettier/parser-typescript";
import { useEffect, useState } from "react";
import { getCodeFromHash, getHashFromCode } from "../../util/hashCode";

const Playground = (): React.ReactElement => {
	const [input, setInput] = useState("");
	const [inputModel, setInputModel] = useState<editor.ITextModel>();

	const setInputToBoilerplate = () => {
		inputModel?.setValue('console.log("Hello World!");\n');
	};

	useEffect(() => {
		if (inputModel) {
			if (location.hash !== "") {
				const code = getCodeFromHash(location.hash);
				if (code) {
					inputModel?.setValue(code);
					setInput(code);
				}
			} else if (inputModel && inputModel.getValue() === "") {
				setInputToBoilerplate();
			}
		}
	}, [inputModel]);

	const editorDidMount: OnMount = (editor, monaco) => {
		loader.init().then((monaco) => {
			let options = monaco.languages.typescript.typescriptDefaults.getCompilerOptions();
			options.lib = ["dom", "dom.iterable", "esnext"];
			options.strict = true;
			options.jsx = monaco.languages.typescript.JsxEmit.React;
			monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
				options
			);

			const uri = monaco.Uri.file("input.tsx");
			const model =
				monaco.editor.getModel(uri) ||
				monaco.editor.createModel(input, "typescript", uri);

			editor.setModel(model);
			const modelContentChanged = editor.onDidChangeModelContent(() =>
				setInput(editor.getValue())
			);

			editor.addCommand(
				monaco.KeyMod.Alt | monaco.KeyMod.Shift | monaco.KeyCode.KEY_F,
				() => {
					const cursorOffset = model.getOffsetAt(
						editor.getPosition() || new monaco.Position(0, 0)
					);
					const formatResult = prettier.formatWithCursor(model.getValue(), {
						parser: "typescript",
						plugins: [parserTypeScript],

						semi: true,
						trailingComma: "all",
						singleQuote: false,
						printWidth: 120,
						tabWidth: 4,
						useTabs: true,
						arrowParens: "always",

						cursorOffset,
					});

					model.setValue(formatResult.formatted);
					editor.setPosition(model.getPositionAt(formatResult.cursorOffset));
				}
			);

			setInputModel(model);
			setInput(model.getValue());
			return () => {
				modelContentChanged.dispose();
			};
		});
	};

	useEffect(() => {
		if (inputModel) {
			location.hash = getHashFromCode(input);
		}
	}, [input, inputModel]);

	return (
		<div className="after-nav-bar">
			<div className="editor-container w-full h-full">
				<Editor
					language="typescript"
					options={{
						minimap: { enabled: true },
						scrollbar: { useShadows: false },
						scrollBeyondLastLine: false,
					}}
					theme="vs-dark"
					onMount={editorDidMount}
				/>
			</div>
		</div>
	);
};

export default Playground;
