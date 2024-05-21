"use strict";
(self["webpackChunkpnewext"] = self["webpackChunkpnewext"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var monaco_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! monaco-editor */ "webpack/sharing/consume/default/monaco-editor/monaco-editor");
/* harmony import */ var monaco_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(monaco_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai */ "webpack/sharing/consume/default/openai/openai");
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jupyterlab/settingregistry */ "webpack/sharing/consume/default/@jupyterlab/settingregistry");
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _azure_openai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/openai */ "webpack/sharing/consume/default/@azure/openai/@azure/openai");
/* harmony import */ var _azure_openai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_azure_openai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");
/* harmony import */ var _prompt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prompt */ "./lib/prompt.js");
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! posthog-js */ "webpack/sharing/consume/default/posthog-js/posthog-js");
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _splashScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./splashScreen */ "./lib/splashScreen.js");
/* eslint-disable camelcase */
/*
 * Copyright (c) Pretzel AI GmbH.
 * This file is part of the Pretzel project and is licensed under the
 * GNU Affero General Public License version 3.
 * See the LICENSE_AGPLv3 file at the root of the project for the full license text.
 * Contributions by contributors listed in the PRETZEL_CONTRIBUTORS file (found at
 * the root of the project) are licensed under AGPLv3.
 */
/**
 * @packageDocumentation
 * @module pretzelai-extension
 */










function initializePosthog(cookiesEnabled) {
    posthog_js__WEBPACK_IMPORTED_MODULE_6___default().init('phc_FnIUQkcrbS8sgtNFHp5kpMkSvL5ydtO1nd9mPllRQqZ', {
        api_host: 'https://d2yfaqny8nshvd.cloudfront.net',
        persistence: cookiesEnabled ? 'localStorage+cookie' : 'memory',
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        mask_all_text: true,
        disable_session_recording: true
    });
}
const PLUGIN_ID = '@jupyterlab/pretzelai-extension:plugin';
const NUMBER_OF_SIMILAR_CELLS = 3;
const extension = {
    id: PLUGIN_ID,
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette, _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.INotebookTracker, _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_4__.ISettingRegistry],
    activate: async (app, palette, notebookTracker, settingRegistry) => {
        const { commands } = app;
        const command = 'pretzelai:replace-code';
        const placeholderDisabled = 'To use AI features, please set your OpenAI API key or Azure API details in the Pretzel AI Settings.\n' +
            'You can also use the free Pretzel AI server.\n' +
            'Go To: Settings > Settings Editor > Pretzel AI Settings to configure';
        const placeHolderEnabled = 'Ask AI. Use @variableName to reference defined variables and dataframes';
        let openAiApiKey = '';
        let openAiBaseUrl = '';
        let aiService = 'Use Pretzel AI Server';
        let azureBaseUrl = '';
        let azureDeploymentName = '';
        let azureApiKey = '';
        let aiClient;
        let posthogPromptTelemetry = true;
        const showSplashScreen = async (consent) => {
            if (consent === 'None') {
                (0,_splashScreen__WEBPACK_IMPORTED_MODULE_7__.initSplashScreen)(settingRegistry);
            }
        };
        async function loadSettings(updateFunc) {
            try {
                const settings = await settingRegistry.load(PLUGIN_ID);
                const openAiSettings = settings.get('openAiSettings').composite;
                openAiApiKey = (openAiSettings === null || openAiSettings === void 0 ? void 0 : openAiSettings.openAiApiKey) || '';
                openAiBaseUrl = (openAiSettings === null || openAiSettings === void 0 ? void 0 : openAiSettings.openAiBaseUrl) || '';
                const azureSettings = settings.get('azureSettings').composite;
                azureBaseUrl = (azureSettings === null || azureSettings === void 0 ? void 0 : azureSettings.azureBaseUrl) || '';
                azureDeploymentName = (azureSettings === null || azureSettings === void 0 ? void 0 : azureSettings.azureDeploymentName) || '';
                azureApiKey = (azureSettings === null || azureSettings === void 0 ? void 0 : azureSettings.azureApiKey) || '';
                const aiServiceSetting = settings.get('aiService').composite;
                aiService = aiServiceSetting || 'Use Pretzel AI Server';
                posthogPromptTelemetry = settings.get('posthogPromptTelemetry')
                    .composite;
                const cookieSettings = await settingRegistry.load('@jupyterlab/apputils-extension:notification');
                const posthogCookieConsent = cookieSettings.get('posthogCookieConsent')
                    .composite;
                initializePosthog(posthogCookieConsent === 'Yes');
                updateFunc === null || updateFunc === void 0 ? void 0 : updateFunc();
                loadAIClient();
                showSplashScreen(posthogCookieConsent);
            }
            catch (reason) {
                console.error('Failed to load settings for Pretzel', reason);
            }
        }
        loadSettings();
        function loadAIClient() {
            if (aiService === 'OpenAI API key') {
                aiClient = new (openai__WEBPACK_IMPORTED_MODULE_3___default())({
                    apiKey: openAiApiKey,
                    dangerouslyAllowBrowser: true
                });
            }
            else if (aiService === 'Use Azure API') {
                aiClient = new _azure_openai__WEBPACK_IMPORTED_MODULE_5__.OpenAIClient(azureBaseUrl, new _azure_openai__WEBPACK_IMPORTED_MODULE_5__.AzureKeyCredential(azureApiKey));
            }
            else {
                aiClient = null;
            }
        }
        loadAIClient(); // first time load, later settings will trigger this
        // Listen for future changes in settings
        settingRegistry.pluginChanged.connect((sender, plugin) => {
            if (plugin === extension.id) {
                const updateFunc = async () => {
                    const submitButton = document.querySelector('.pretzelInputSubmitButton');
                    const inputField = document.querySelector('.pretzelInputField');
                    if (submitButton) {
                        if ((aiService === 'OpenAI API key' && openAiApiKey) ||
                            aiService === 'Use Pretzel AI Server' ||
                            (aiService === 'Use Azure API' &&
                                azureBaseUrl &&
                                azureDeploymentName &&
                                azureApiKey)) {
                            submitButton.disabled = false;
                            inputField.placeholder = placeHolderEnabled;
                        }
                        else {
                            submitButton.disabled = true;
                            inputField.placeholder =
                                placeholderDisabled;
                        }
                    }
                };
                loadSettings(updateFunc);
            }
        });
        notebookTracker.activeCellChanged.connect((sender, cell) => {
            if (cell && cell.model.type === 'code') {
                const codeCellModel = cell.model;
                codeCellModel.outputs.changed.connect(() => {
                    const outputs = codeCellModel.outputs;
                    const errorOutput = findErrorOutput(outputs);
                    if (errorOutput) {
                        addFixErrorButton(cell.node.querySelector('.jp-RenderedText.jp-mod-trusted.jp-OutputArea-output'), codeCellModel);
                    }
                });
                addAskAIButton(cell.node);
            }
        });
        function findErrorOutput(outputs) {
            for (let i = 0; i < outputs.length; i++) {
                const output = outputs.get(i);
                if (output.type === 'error') {
                    return output;
                }
            }
            return undefined;
        }
        function addFixErrorButton(cellNode, cellModel) {
            // Remove existing button if any for case with multiple errors multiple buttons
            const existingButton = cellNode.querySelector('.fix-error-button');
            if (existingButton) {
                existingButton.remove();
            }
            const button = document.createElement('button');
            button.textContent = 'Fix Error with AI';
            button.className = 'fix-error-button';
            button.style.position = 'absolute';
            button.style.top = '10px';
            button.style.right = '10px';
            button.style.padding = '5px 10px';
            button.style.backgroundColor = '#007bff';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.borderRadius = '4px';
            button.style.cursor = 'pointer';
            cellNode.appendChild(button);
            button.onclick = () => {
                posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('Fix Error with AI', {
                    event_type: 'click',
                    method: 'fix_error'
                });
                const existingButton = cellNode.querySelector('.fix-error-button');
                if (existingButton) {
                    existingButton.remove();
                }
                handleFixError(cellModel);
            };
        }
        function addAskAIButton(cellNode) {
            // Hide button from non focused cells
            const existingButton = document.querySelector('.pretzel-ai-button');
            if (existingButton) {
                existingButton.remove();
            }
            const button = document.createElement('button');
            button.textContent = 'Ask AI';
            button.style.fontSize = '12px';
            button.className = 'pretzel-ai-button';
            button.style.position = 'absolute';
            button.style.top = '10px';
            button.style.right = '190px';
            button.style.padding = '2px 10px 3px 10px';
            button.style.backgroundColor = 'rgb(84 157 235)';
            button.style.color =
                document.body.getAttribute('data-jp-theme-light') === 'true'
                    ? 'white'
                    : 'rgba(0, 0, 0, 0.8)';
            button.style.border = 'none';
            button.style.borderRadius = '4px';
            button.style.cursor = 'pointer';
            button.style.zIndex = '1000';
            cellNode.appendChild(button);
            button.onclick = () => {
                posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('Ask AI', {
                    event_type: 'click',
                    method: 'ask_ai'
                });
                commands.execute('pretzelai:replace-code');
            };
        }
        async function handleFixError(cellModel) {
            const outputs = cellModel.outputs;
            let traceback = findErrorOutput(outputs).toJSON().traceback;
            if (!traceback) {
                // handle error where traceback is undefined
                traceback = 'No traceback found';
            }
            // else  if traceback is an array, join with newlines
            else if (traceback instanceof Array) {
                // replace ANSI chars in traceback - they show colors that we don't need
                // eslint-disable-next-line no-control-regex
                traceback = traceback.join('\n').replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '');
            }
            // else traceback is some JS object. Convert it to a string representation
            else {
                traceback = traceback.toString();
            }
            const originalCode = cellModel.sharedModel.source;
            let activeCell = notebookTracker.activeCell;
            const statusElement = document.createElement('p');
            statusElement.style.marginLeft = '70px';
            statusElement.textContent = 'Calculating embeddings...';
            activeCell.node.appendChild(statusElement);
            const topSimilarities = await (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.getTopSimilarities)(originalCode, embeddings, NUMBER_OF_SIMILAR_CELLS, aiClient, aiService, cellModel.id);
            const prompt = (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.generatePrompt)('', originalCode, topSimilarities, '', traceback);
            let diffEditorContainer = document.createElement('div');
            let diffEditor = null;
            const parentContainer = document.createElement('div');
            parentContainer.classList.add('pretzelParentContainerAI');
            activeCell.node.appendChild(parentContainer);
            diffEditor = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.renderEditor)('', parentContainer, diffEditorContainer, diffEditor, monaco_editor__WEBPACK_IMPORTED_MODULE_2__, originalCode);
            (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.openAiStream)({
                aiService,
                openAiApiKey,
                openAiBaseUrl,
                prompt,
                parentContainer,
                inputContainer: null,
                diffEditorContainer,
                diffEditor,
                monaco: monaco_editor__WEBPACK_IMPORTED_MODULE_2__,
                oldCode: originalCode,
                azureBaseUrl,
                azureApiKey,
                deploymentId: azureDeploymentName,
                activeCell,
                commands,
                statusElement
            })
                .then(() => {
                // clear output of the cell
                cellModel.outputs.clear();
            })
                .catch(error => {
                console.error('Error during OpenAI stream:', error);
            });
        }
        let embeddings;
        async function createEmbeddings(embeddingsJSON, cells, path) {
            embeddings = embeddingsJSON;
            const newEmbeddingsArray = [];
            const promises = cells
                .filter(cell => cell.source.trim() !== '') // Filter out empty cells
                .map(cell => {
                return (async () => {
                    const index = embeddings.findIndex(e => e.id === cell.id);
                    if (index !== -1) {
                        const hash = await (0,_utils__WEBPACK_IMPORTED_MODULE_9__.calculateHash)(cell.source);
                        if (hash !== embeddings[index].hash) {
                            try {
                                const response = await (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.openaiEmbeddings)(cell.source, aiService, aiClient);
                                newEmbeddingsArray.push({
                                    id: cell.id,
                                    source: cell.source,
                                    hash,
                                    embedding: response.data[0].embedding
                                });
                            }
                            catch (error) {
                                console.error('Error generating embedding:', error);
                            }
                        }
                        else {
                            newEmbeddingsArray.push(embeddings[index]);
                        }
                    }
                    else {
                        try {
                            const response = await (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.openaiEmbeddings)(cell.source, aiService, aiClient);
                            const hash = await (0,_utils__WEBPACK_IMPORTED_MODULE_9__.calculateHash)(cell.source);
                            newEmbeddingsArray.push({
                                id: cell.id,
                                source: cell.source,
                                hash,
                                embedding: response.data[0].embedding
                            });
                        }
                        catch (error) {
                            console.error('Error generating embedding:', error);
                        }
                    }
                })();
            });
            await Promise.allSettled(promises);
            const oldSet = new Set((embeddings).map(e => e.hash));
            const newSet = new Set((newEmbeddingsArray).map(e => e.hash));
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isSetsEqual)(oldSet, newSet)) {
                app.serviceManager.contents.save(path, {
                    type: 'file',
                    format: 'text',
                    content: JSON.stringify(newEmbeddingsArray)
                });
            }
        }
        // Function to print the source of all cells once the notebook is defined
        function getEmbeddings() {
            const notebook = notebookTracker.currentWidget;
            if (notebook === null || notebook === void 0 ? void 0 : notebook.model) {
                const currentNotebookPath = notebook.context.path;
                const embeddingsPath = currentNotebookPath.replace('.ipynb', '') + '_embeddings.json';
                app.serviceManager.contents
                    .get(embeddingsPath)
                    .then(file => {
                    try {
                        const embJSON = JSON.parse(file.content);
                        createEmbeddings(embJSON, notebook.model.sharedModel.cells, embeddingsPath);
                    }
                    catch (error) {
                        console.error('Error parsing embeddings JSON:', error);
                    }
                })
                    .catch(async (error) => {
                    app.serviceManager.contents.save(embeddingsPath, {
                        type: 'file',
                        format: 'text',
                        content: JSON.stringify([])
                    });
                });
                // Temporary solution to keep refreshing hashes in non blocking thread
                setTimeout(getEmbeddings, 1000);
            }
            else {
                setTimeout(getEmbeddings, 1000);
            }
        }
        getEmbeddings();
        async function getVariableValue(variableName) {
            var _a;
            const notebook = notebookTracker.currentWidget;
            if (notebook && ((_a = notebook.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel)) {
                const kernel = notebook.sessionContext.session.kernel;
                try {
                    // get the type - if dataframe, we get columns
                    // if other, we get the string representation
                    const executeRequest = kernel.requestExecute({
                        code: `print(${variableName})`
                    });
                    let variableValue = null;
                    // Registering a message hook to intercept messages
                    kernel.registerMessageHook(executeRequest.msg.header.msg_id, (msg) => {
                        if (msg.header.msg_type === 'stream' &&
                            // @ts-expect-error tserror
                            msg.content.name === 'stdout') {
                            // @ts-expect-error tserror
                            variableValue = msg.content.text.trim();
                        }
                        return true;
                    });
                    // Await the completion of the execute request
                    const reply = await executeRequest.done;
                    if (reply && reply.content.status === 'ok') {
                        return variableValue;
                    }
                    else {
                        console.error('Failed to retrieve variable value');
                        return null;
                    }
                }
                catch (error) {
                    console.error('Error retrieving variable value:', error);
                    return null;
                }
            }
            else {
                console.error('No active kernel found');
                return null;
            }
        }
        const getSelectedCode = () => {
            var _a, _b, _c;
            const selection = (_b = (_a = notebookTracker.activeCell) === null || _a === void 0 ? void 0 : _a.editor) === null || _b === void 0 ? void 0 : _b.getSelection();
            const cellCode = (_c = notebookTracker.activeCell) === null || _c === void 0 ? void 0 : _c.model.sharedModel.source;
            let extractedCode = '';
            if (selection &&
                (selection.start.line !== selection.end.line ||
                    selection.start.column !== selection.end.column)) {
                const startLine = selection.start.line;
                const endLine = selection.end.line;
                const startColumn = selection.start.column;
                const endColumn = selection.end.column;
                for (let i = startLine; i <= endLine; i++) {
                    const lineContent = cellCode.split('\n')[i];
                    if (lineContent !== undefined) {
                        if (i === startLine && i === endLine) {
                            extractedCode += lineContent.substring(startColumn, endColumn);
                        }
                        else if (i === startLine) {
                            extractedCode += lineContent.substring(startColumn);
                        }
                        else if (i === endLine) {
                            extractedCode += '\n' + lineContent.substring(0, endColumn);
                        }
                        else {
                            extractedCode += '\n' + lineContent;
                        }
                    }
                }
            }
            // also return the selection
            return { extractedCode: extractedCode.trimEnd(), selection };
        };
        async function processTaggedVariables(userInput) {
            const variablePattern = /@(\w+)/g;
            let match;
            let modifiedUserInput = userInput;
            while ((match = variablePattern.exec(userInput)) !== null) {
                try {
                    const variableName = match[1];
                    // get value of var using the getVariableValue function
                    const variableType = await getVariableValue(`type(${variableName})`);
                    // check if variableType is dataframe
                    // if it is, get columns and add to modifiedUserInput
                    if (variableType === null || variableType === void 0 ? void 0 : variableType.includes('DataFrame')) {
                        const variableColumns = await getVariableValue(`${variableName}.columns`);
                        modifiedUserInput += `\n${variableName} is a dataframe with the following columns: ${variableColumns}\n`;
                    }
                    else if (variableType) {
                        const variableValue = await getVariableValue(variableName);
                        modifiedUserInput += `\nPrinting ${variableName} in Python returns the string ${variableValue}\n`;
                    }
                }
                catch (error) {
                    console.error(`Error accessing variable ${match[1]}:`, error);
                }
            }
            return modifiedUserInput;
        }
        commands.addCommand(command, {
            label: 'Replace Cell Code',
            execute: () => {
                const activeCell = notebookTracker.activeCell;
                let diffEditorContainer = document.createElement('div');
                let diffEditor = null;
                if (activeCell) {
                    // Cmd K twice should toggle the box
                    const existingDiv = activeCell.node.querySelector('.pretzelParentContainerAI');
                    // this code is repeated with the removeHandler
                    if (existingDiv) {
                        // If so, delete that div
                        existingDiv.remove();
                        // Switch focus back to the Jupyter cell
                        posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('Remove via Cmd K', {
                            event_type: 'keypress',
                            event_value: 'Cmd+k',
                            method: 'remove'
                        });
                        const statusElements = activeCell.node.querySelectorAll('p[style="margin-left: 70px;"]');
                        statusElements.forEach(element => element.remove());
                        // Switch focus back to the Jupyter cell
                        activeCell.editor.focus();
                        return;
                    }
                    const oldCode = activeCell.model.sharedModel.source;
                    const statusElement = document.createElement('p');
                    statusElement.textContent = '';
                    statusElement.style.marginLeft = '70px';
                    activeCell.node.appendChild(statusElement);
                    // Create a parent container for all dynamically created elements
                    const parentContainer = document.createElement('div');
                    parentContainer.classList.add('pretzelParentContainerAI');
                    activeCell.node.appendChild(parentContainer);
                    // Create an input field and append it below the cell
                    const inputContainer = document.createElement('div');
                    inputContainer.style.marginTop = '10px';
                    inputContainer.style.marginLeft = '70px';
                    inputContainer.style.display = 'flex';
                    inputContainer.style.flexDirection = 'column';
                    parentContainer.appendChild(inputContainer);
                    const inputField = document.createElement('textarea');
                    inputField.classList.add('pretzelInputField');
                    inputField.placeholder = placeHolderEnabled;
                    inputField.style.width = '100%';
                    inputField.style.height = '100px';
                    inputContainer.appendChild(inputField);
                    inputField.addEventListener('keydown', event => {
                        if (event.key === 'Escape') {
                            // TODO: this doesn't work - the Escape key isn't being captured
                            // but every other key press is being captured
                            posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('Remove via Escape', {
                                event_type: 'keypress',
                                event_value: 'esc',
                                method: 'remove'
                            });
                            event.preventDefault(); // Prevent any default behavior
                            // Shift focus back to the editor of the active cell
                            const activeCell = notebookTracker.activeCell;
                            if (activeCell && activeCell.editor) {
                                activeCell.editor.focus(); // Focus the editor of the active cell
                            }
                        }
                        // handle enter key press to trigger submit
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            if (!submitButton.disabled) {
                                posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('Submit via Enter', {
                                    event_type: 'keypress',
                                    event_value: 'enter',
                                    method: 'submit'
                                });
                                handleSubmit(inputField.value);
                            }
                        }
                    });
                    const inputFieldButtonsContainer = document.createElement('div');
                    inputFieldButtonsContainer.style.marginTop = '10px';
                    inputFieldButtonsContainer.style.display = 'flex';
                    inputFieldButtonsContainer.style.flexDirection = 'row';
                    inputContainer.appendChild(inputFieldButtonsContainer);
                    inputField.focus();
                    const submitButton = document.createElement('button');
                    submitButton.classList.add('pretzelInputSubmitButton');
                    submitButton.textContent = 'Submit';
                    submitButton.style.backgroundColor = 'lightblue';
                    submitButton.style.borderRadius = '5px';
                    submitButton.style.border = '1px solid darkblue';
                    submitButton.style.maxWidth = '100px';
                    submitButton.style.minHeight = '25px';
                    submitButton.style.marginTop = '10px';
                    submitButton.style.marginRight = '10px';
                    submitButton.addEventListener('click', () => {
                        posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('Submit via Click', {
                            event_type: 'click',
                            method: 'submit'
                        });
                        handleSubmit(inputField.value);
                    });
                    inputFieldButtonsContainer.appendChild(submitButton);
                    // write code to add a button the removed the inputField and submitButton
                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'Remove';
                    removeButton.style.backgroundColor = 'lightcoral';
                    removeButton.style.borderRadius = '5px';
                    removeButton.style.border = '1px solid darkred';
                    removeButton.style.maxWidth = '100px';
                    removeButton.style.minHeight = '25px';
                    removeButton.style.marginTop = '10px';
                    inputFieldButtonsContainer.appendChild(removeButton);
                    const removeHandler = () => {
                        posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('Remove via Click', {
                            event_type: 'click',
                            method: 'remove'
                        });
                        activeCell.node.removeChild(parentContainer);
                        const statusElements = activeCell.node.querySelectorAll('p[style="margin-left: 70px;"]');
                        statusElements.forEach(element => element.remove());
                        // Switch focus back to the Jupyter cell
                        activeCell.editor.focus();
                    };
                    removeButton.addEventListener('click', removeHandler);
                    const handleSubmit = async (userInput) => {
                        parentContainer.removeChild(inputContainer);
                        const { extractedCode } = getSelectedCode();
                        statusElement.textContent = 'Calculating embeddings...';
                        if (userInput !== '') {
                            userInput = await processTaggedVariables(userInput);
                            try {
                                const topSimilarities = await (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.getTopSimilarities)(userInput, embeddings, NUMBER_OF_SIMILAR_CELLS, aiClient, aiService, activeCell.model.id);
                                const prompt = (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.generatePrompt)(userInput, oldCode, topSimilarities, extractedCode);
                                // if posthogPromptTelemetry is true, capture the prompt
                                if (posthogPromptTelemetry) {
                                    posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('prompt', { property: userInput });
                                }
                                else {
                                    posthog_js__WEBPACK_IMPORTED_MODULE_6___default().capture('prompt', { property: 'no_telemetry' });
                                }
                                diffEditor = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.renderEditor)('', parentContainer, diffEditorContainer, diffEditor, monaco_editor__WEBPACK_IMPORTED_MODULE_2__, oldCode);
                                (0,_prompt__WEBPACK_IMPORTED_MODULE_8__.openAiStream)({
                                    aiService,
                                    parentContainer,
                                    diffEditorContainer,
                                    diffEditor,
                                    monaco: monaco_editor__WEBPACK_IMPORTED_MODULE_2__,
                                    oldCode,
                                    inputContainer,
                                    // OpenAI API
                                    openAiApiKey,
                                    openAiBaseUrl,
                                    prompt,
                                    // Azure API
                                    azureApiKey,
                                    azureBaseUrl,
                                    deploymentId: azureDeploymentName,
                                    activeCell,
                                    commands,
                                    statusElement
                                });
                            }
                            catch (error) {
                                activeCell.node.removeChild(parentContainer);
                            }
                        }
                    };
                }
            }
        });
        const category = 'Cell Operations';
        palette.addItem({ command, category });
        app.commands.addKeyBinding({
            command,
            keys: ['Accel K'],
            selector: '.jp-Notebook'
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ }),

/***/ "./lib/prompt.js":
/*!***********************!*\
  !*** ./lib/prompt.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMBEDDING_MODEL: () => (/* binding */ EMBEDDING_MODEL),
/* harmony export */   generatePrompt: () => (/* binding */ generatePrompt),
/* harmony export */   getTopSimilarities: () => (/* binding */ getTopSimilarities),
/* harmony export */   openAiStream: () => (/* binding */ openAiStream),
/* harmony export */   openaiEmbeddings: () => (/* binding */ openaiEmbeddings),
/* harmony export */   systemPrompt: () => (/* binding */ systemPrompt)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ "webpack/sharing/consume/default/openai/openai");
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _azure_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/openai */ "webpack/sharing/consume/default/@azure/openai/@azure/openai");
/* harmony import */ var _azure_openai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_azure_openai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! posthog-js */ "webpack/sharing/consume/default/posthog-js/posthog-js");
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable camelcase */
/*
 * Copyright (c) Pretzel AI GmbH.
 * This file is part of the Pretzel project and is licensed under the
 * GNU Affero General Public License version 3.
 * See the LICENSE_AGPLv3 file at the root of the project for the full license text.
 * Contributions by contributors listed in the PRETZEL_CONTRIBUTORS file (found at
 * the root of the project) are licensed under AGPLv3.
 */





const EMBEDDING_MODEL = 'text-embedding-3-large';
function generatePrompt(userInput, oldCode, topSimilarities, selectedCode = '', traceback = '') {
    if (selectedCode) {
        return generatePromptEditPartial(userInput, selectedCode, oldCode, topSimilarities);
    }
    if (traceback) {
        return generatePromptErrorFix(traceback, oldCode, topSimilarities);
    }
    return generatePromptNewAndFullEdit(userInput, oldCode, topSimilarities);
}
function generatePromptNewAndFullEdit(userInput, oldCode, topSimilarities) {
    return `The user wants to do the following:
"""
${userInput}
"""

${oldCode
        ? `The following code already exists in the notebook cell:
"""
${oldCode}
"""

`
        : ''}
${topSimilarities.length > 0
        ? `We also have the following matching code chunks in the notebook\n---\n${topSimilarities.join('\n---\n')}\n---\n`
        : ''}
Based on the above, return ONLY executable python code, no backticks.`;
}
function generatePromptEditPartial(userInput, selectedCode, oldCode, topSimilarities) {
    return `The user has selected the following code chunk in the CURRENT Jupyter notebook cell (pay attention to the indents and newlines):
SELECTED CODE START
\`\`\`
${selectedCode}
\`\`\`
SELECTED CODE END

This code is part of the following larger code chunk
FULL CODE CHUNK START
\`\`\`
${oldCode}
\`\`\`
FULL CODE CHUNK END

The user wants to modify the SELECTED CODE ONLY (IMPORTANT) with the following instruction:
"""
${userInput}
"""

${topSimilarities.length > 0
        ? `The following code chunks were also found in the notebook and may be relevant:\n\`\`\`\n${topSimilarities.join('\n```\n\n```\n')}\n\`\`\`\n`
        : ''}

INSTRUCTION: Modify the SELECTED CODE (AND ONLY THE SELECTED CODE) according to the user's instructions. Return FULL CODE CHUNK but with the selected code modified.`;
}
function generatePromptErrorFix(traceback, oldCode, topSimilarities) {
    return `The user ran the following code in the current Jupyter notebook cell:

---
${oldCode}
---

Running the code produces the following traceback:
${traceback}
---

${topSimilarities.length > 0
        ? `We also have the following related code chunks in the notebook\n---\n${topSimilarities.join('\n---\n')}\n---\n`
        : ''}

Based on the above, your instructions are:

- If the error is in the CURRENT cell, fix the error and return ONLY correct, executable python code, no backticks, no comments.
- Else if the error is NOT in the CURRENT Jupyter Notebook cell, add a comment at the top explaining this and add just enough code in the CURRENT cell to fix the error.
- Else If you don't have enough context to fix the error, just reply with existing code and a comment at the top explaining why you cannot generate fixed code.
`;
}
const openAiStream = async ({ aiService, openAiApiKey, openAiBaseUrl, prompt, parentContainer, inputContainer, diffEditorContainer, diffEditor, monaco, oldCode, azureBaseUrl, azureApiKey, deploymentId, activeCell, commands, statusElement }) => {
    var _a, _b;
    statusElement.textContent = 'Calling AI service...';
    if (aiService === 'OpenAI API key' && openAiApiKey && prompt) {
        const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({
            apiKey: openAiApiKey,
            dangerouslyAllowBrowser: true,
            baseURL: openAiBaseUrl ? openAiBaseUrl : undefined
        });
        const stream = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            stream: true
        });
        statusElement.textContent = 'Generating code...';
        for await (const chunk of stream) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.renderEditor)(((_b = (_a = chunk.choices[0]) === null || _a === void 0 ? void 0 : _a.delta) === null || _b === void 0 ? void 0 : _b.content) || '', parentContainer, diffEditorContainer, diffEditor, monaco, oldCode);
        }
    }
    else if (aiService === 'Use Pretzel AI Server') {
        const response = await fetch('https://wjwgjk52kb3trqnlqivqqyxm3i0glvof.lambda-url.eu-central-1.on.aws/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let isReading = true;
        statusElement.textContent = 'Generating code...';
        while (isReading) {
            const { done, value } = await reader.read();
            if (done) {
                isReading = false;
            }
            const chunk = decoder.decode(value);
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.renderEditor)(chunk, parentContainer, diffEditorContainer, diffEditor, monaco, oldCode);
        }
    }
    else if (aiService === 'Use Azure API' &&
        prompt &&
        azureBaseUrl &&
        azureApiKey &&
        deploymentId) {
        const client = new _azure_openai__WEBPACK_IMPORTED_MODULE_1__.OpenAIClient(azureBaseUrl, new _azure_openai__WEBPACK_IMPORTED_MODULE_1__.AzureKeyCredential(azureApiKey));
        const result = await client.getCompletions(deploymentId, [prompt]);
        statusElement.textContent = 'Generating code...';
        for (const choice of result.choices) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.renderEditor)(choice.text, parentContainer, diffEditorContainer, diffEditor, monaco, oldCode);
        }
    }
    // Handle occasional responsde with backticks
    const newCode = diffEditor.getModel().modified.getValue();
    if (newCode.split('```').length === 3) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.renderEditor)(newCode.split('```')[1], parentContainer, diffEditorContainer, diffEditor, monaco, oldCode);
    }
    setTimeout(async () => {
        const changes = diffEditor.getLineChanges();
        let totalLines = oldCode.split('\n').length;
        if (changes) {
            changes.forEach((c) => {
                if (c.modifiedEndLineNumber >= c.modifiedStartLineNumber) {
                    const modified = c.modifiedEndLineNumber - c.modifiedStartLineNumber + 1;
                    totalLines += modified;
                }
            });
        }
        const heightPx = totalLines * 19;
        diffEditorContainer.style.height = heightPx + 'px';
        diffEditor === null || diffEditor === void 0 ? void 0 : diffEditor.layout();
    }, 500);
    // Create "Accept" and "Reject" buttons
    const diffContainer = document.querySelector('.diff-container');
    const acceptButton = document.createElement('button');
    acceptButton.textContent = 'Accept';
    acceptButton.style.backgroundColor = 'lightblue';
    acceptButton.style.borderRadius = '5px';
    acceptButton.style.border = '1px solid darkblue';
    acceptButton.style.maxWidth = '100px';
    acceptButton.style.minHeight = '25px';
    acceptButton.style.marginRight = '10px';
    const handleAccept = () => {
        const modifiedCode = diffEditor.getModel().modified.getValue();
        activeCell.model.sharedModel.source = modifiedCode;
        commands.execute('notebook:run-cell');
        activeCell.node.removeChild(parentContainer);
        statusElement.remove();
    };
    acceptButton.addEventListener('click', () => {
        posthog_js__WEBPACK_IMPORTED_MODULE_2___default().capture('Accept', {
            event_type: 'click',
            method: 'accept'
        });
        handleAccept();
    });
    const rejectButton = document.createElement('button');
    rejectButton.textContent = 'Reject';
    rejectButton.style.backgroundColor = 'lightblue';
    rejectButton.style.borderRadius = '5px';
    rejectButton.style.border = '1px solid darkblue';
    rejectButton.style.maxWidth = '100px';
    rejectButton.style.minHeight = '25px';
    rejectButton.style.marginRight = '10px';
    const handleReject = () => {
        activeCell.node.removeChild(parentContainer);
        activeCell.model.sharedModel.source = oldCode;
        statusElement.remove();
    };
    rejectButton.addEventListener('click', () => {
        posthog_js__WEBPACK_IMPORTED_MODULE_2___default().capture('Reject', {
            event_type: 'click',
            method: 'reject'
        });
        handleReject();
    });
    const editPromptButton = document.createElement('button');
    if (inputContainer) {
        editPromptButton.textContent = 'Edit Prompt';
        editPromptButton.style.backgroundColor = 'lightgreen';
        editPromptButton.style.borderRadius = '5px';
        editPromptButton.style.border = '1px solid darkgreen';
        editPromptButton.style.maxWidth = '100px';
        editPromptButton.style.minHeight = '25px';
        editPromptButton.style.marginRight = '10px';
        editPromptButton.addEventListener('click', () => {
            posthog_js__WEBPACK_IMPORTED_MODULE_2___default().capture('Edit Prompt', {
                event_type: 'click',
                method: 'edit_prompt'
            });
            // Remove the parent container
            parentContainer.remove();
            commands.execute('pretzelai:replace-code');
            const newParentContainer = document.querySelector('.pretzelParentContainerAI');
            const newInputField = newParentContainer.querySelector('.pretzelInputField');
            if (newInputField) {
                const oldInputField = inputContainer.querySelector('.pretzelInputField');
                if (oldInputField) {
                    const oldInputText = oldInputField.value;
                    newInputField.value = oldInputText;
                }
                newInputField.focus();
            }
        });
    }
    const diffButtonsContainer = document.createElement('div');
    diffButtonsContainer.style.marginTop = '10px';
    diffButtonsContainer.style.marginLeft = '70px';
    diffButtonsContainer.style.display = 'flex';
    diffButtonsContainer.style.flexDirection = 'row';
    diffButtonsContainer.tabIndex = 0; // Make the container focusable
    diffButtonsContainer.style.outline = 'none'; // Remove blue border when focused
    diffContainer.appendChild(diffButtonsContainer);
    diffButtonsContainer.appendChild(acceptButton);
    diffButtonsContainer.appendChild(rejectButton);
    if (inputContainer) {
        diffButtonsContainer.appendChild(editPromptButton);
    }
    diffButtonsContainer.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAccept();
        }
        else if (event.key === 'Escape') {
            event.preventDefault();
            handleReject();
        }
    });
    diffButtonsContainer.focus();
    statusElement.textContent = '';
};
const openaiEmbeddings = async (source, aiService, aiClient) => {
    if (aiService === 'Use Pretzel AI Server') {
        return (await (await fetch('https://e7l46ifvcg6qrbuinytg7u535y0denki.lambda-url.eu-central-1.on.aws/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                source: source
            })
        })).json());
    }
    else if (aiService === 'OpenAI API key') {
        return await aiClient.embeddings.create({
            model: EMBEDDING_MODEL,
            input: source
        });
    }
    else if (aiService === 'Use Azure API') {
        return await aiClient.getEmbeddings('text-embedding-ada-002', [source]);
    }
    else {
        throw new Error('Invalid AI service');
    }
};
const getTopSimilarities = async (userInput, embeddings, numberOfSimilarities, aiClient, aiService, cellId) => {
    const response = await openaiEmbeddings(userInput, aiService, aiClient);
    const userInputEmbedding = response.data[0].embedding; // same API for openai and azure
    const similarities = embeddings
        .filter(embedding => embedding.id !== cellId) // Exclude current cell's embedding
        .map((embedding, index) => ({
        value: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.cosineSimilarity)(embedding.embedding, userInputEmbedding),
        index
    }));
    return similarities
        .sort((a, b) => b.value - a.value)
        .slice(0, numberOfSimilarities)
        .map(e => embeddings[e.index].source);
};
const systemPrompt = 'You are a helpful assistant that helps users write python code in Jupyter notebook cells. ' +
    'You are helping the user write new code and edit old code in Jupyter notebooks. ' +
    'You write code exactly as if an expert python user would write, reusing existing variables and functions as needed. ' +
    'You respond with the clean, good quality, working python code only, NO BACKTICKS.';


/***/ }),

/***/ "./lib/splashScreen.js":
/*!*****************************!*\
  !*** ./lib/splashScreen.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSplashScreen: () => (/* binding */ initSplashScreen)
/* harmony export */ });
let settingRegistry;
async function handleConsent(consent) {
    await settingRegistry.set('@jupyterlab/apputils-extension:notification', 'posthogCookieConsent', consent);
    removeSplashScreen();
}
function createSplashScreen() {
    var _a, _b;
    const isMac = /Mac/i.test(navigator.userAgent);
    const keyCombination = isMac ? 'Cmd + K' : 'Ctrl + K';
    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.innerHTML = `
    <style>
      #splash-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      .splash-content {
        background: white;
        padding: 30px;
        border-radius: 15px;
        text-align: left;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      }

      .splash-content h1 {
        margin-top: 0;
      }

      .splash-buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
      }

      .splash-buttons button {
        margin-left: 10px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }

      #splash-accept {
        background-color: #4CAF50;
        color: white;
      }

      #splash-reject {
        background-color: transparent;
        color: black;
      }

      .splash-content a {
        color: #1a0dab;
        text-decoration: underline;
      }
    </style>
    <div class="splash-content">
      <h1>Welcome to Pretzel</h1>
      <p>How to use:</p>
      <ul>
        <li>When in a cell, press <strong>${keyCombination}</strong> and type in your prompt</li>
        <li>You can use <strong>@variable</strong> syntax in the prompt to refer to dataframes and variables in memory</li>
        <li>Press the <strong>"Fix Error with AI"</strong> button to automatically fix errors</li>
        <li>Go to <strong>Settings > Settings Editor</strong> and search for Pretzel AI to customize which AI model is used</li>
        <li>See more usage instructions <a href="https://github.com/pretzelai/pretzelai#readme" target="_blank">in our README</a></li>
      </ul>
      <p>To better understand how users are using the new AI codegen features, we collect anonymized telemetry strictly related to the AI features. We also collect the AI prompt but it can be disabled in Pretzel AI Settings.</p>
      <p>We use cookies to make sure we remember you between browser sessions. Do you consent to the use of cookies for this purpose?</p>
      <div class="splash-buttons">
        <button id="splash-accept">Accept</button>
        <button id="splash-reject">Reject</button>
      </div>
    </div>
  `;
    document.body.appendChild(splashScreen);
    (_a = document
        .getElementById('splash-accept')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => handleConsent('Yes'));
    (_b = document
        .getElementById('splash-reject')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => handleConsent('No'));
}
function removeSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.remove();
    }
}
function initSplashScreen(registry) {
    settingRegistry = registry;
    createSplashScreen();
}


/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateHash: () => (/* binding */ calculateHash),
/* harmony export */   cosineSimilarity: () => (/* binding */ cosineSimilarity),
/* harmony export */   isSetsEqual: () => (/* binding */ isSetsEqual),
/* harmony export */   renderEditor: () => (/* binding */ renderEditor)
/* harmony export */ });
/*
 * Copyright (c) Pretzel AI GmbH.
 * This file is part of the Pretzel project and is licensed under the
 * GNU Affero General Public License version 3.
 * See the LICENSE_AGPLv3 file at the root of the project for the full license text.
 * Contributions by contributors listed in the PRETZEL_CONTRIBUTORS file (found at
 * the root of the project) are licensed under AGPLv3.
 */
async function calculateHash(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
const cosineSimilarity = (vecA, vecB) => {
    const dotProduct = vecA.reduce((acc, current, index) => acc + current * vecB[index], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
};
const isSetsEqual = (xs, ys) => xs.size === ys.size && [...xs].every(x => ys.has(x));
const renderEditor = (gen, parentContainer, diffEditorContainer, diffEditor, monaco, oldCode) => {
    try {
        if (!diffEditor) {
            const diffContainer = document.createElement('div');
            diffContainer.className = 'diff-container';
            diffContainer.style.marginTop = '10px';
            diffContainer.style.display = 'flex';
            diffContainer.style.flexDirection = 'column';
            parentContainer.appendChild(diffContainer);
            diffContainer.appendChild(diffEditorContainer);
            // finally, the diff editor itself
            const currentTheme = document.body.getAttribute('data-jp-theme-light') === 'true'
                ? 'vs'
                : 'vs-dark';
            diffEditor = monaco.editor.createDiffEditor(diffEditorContainer, {
                readOnly: true,
                theme: currentTheme,
                renderSideBySide: false,
                minimap: { enabled: false },
                overviewRulerBorder: false,
                overviewRulerLanes: 0,
                scrollbar: {
                    vertical: 'hidden',
                    horizontal: 'hidden',
                    handleMouseWheel: false
                }
            });
            diffEditor.setModel({
                original: monaco.editor.createModel(oldCode, 'python'),
                modified: monaco.editor.createModel('', 'python')
            });
        }
        const modifiedModel = diffEditor.getModel().modified;
        const endLineNumber = modifiedModel.getLineCount();
        const endColumn = modifiedModel.getLineMaxColumn(endLineNumber);
        modifiedModel.applyEdits([
            {
                range: new monaco.Range(endLineNumber, endColumn, endLineNumber, endColumn),
                text: gen,
                forceMoveMarkers: true
            }
        ]);
        const newCode = modifiedModel.getValue();
        const heightPx = oldCode.split('\n').length + newCode.split('\n').length * 19;
        diffEditorContainer.style.height = heightPx + 'px';
        diffEditor === null || diffEditor === void 0 ? void 0 : diffEditor.layout();
        return diffEditor;
    }
    catch (error) {
        console.log('Error rendering editor:', error);
    }
};


/***/ })

}]);
//# sourceMappingURL=lib_index_js.6f7264ab94a5ae0993c2.js.map