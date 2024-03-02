import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';


interface FabricSettings {
	fabricAPIKey: string;
	fabricAPIServer: string;
}

const DEFAULT_SETTINGS: FabricSettings = {
fabricAPIKey: ''
fabricAPIServer: ''
}

export default class FabricPlugin extends Plugin {
	settings: FabricSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'open-extract-wisdom-prompt-active-file',
			name: 'open extract wisdom prompt and populate active file',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new ExtractWisdomModal(this.app).open();
					}

					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
			}
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new FabricSettingTab(this.app, this));

	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

// this adds a Modal for the extract_wisdom Fabric pattern.
class ExtractWisdomModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

class FabricSettingTab extends PluginSettingTab {
	plugin: FabricPlugin;

	constructor(app: App, plugin: FabricPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		// This adds a configurable 'Fabric API Key' setting.
		new Setting(containerEl)
			.setName('Fabric API Key')
			.setDesc('Required')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.fabricAPIKey)
				.onChange(async (value) => {
					this.plugin.settings.fabricAPIKey = value;
					await this.plugin.saveSettings();
				}));

		// This adds a configurable 'Fabric API Server' setting.
		new Setting(containerEl)
			.setName('Fabric API Server')
			.setDesc('Required')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.fabricAPIServer)
				.onChange(async (value) => {
					this.plugin.settings.fabricAPIServer = value;
					await this.plugin.saveSettings();
	}
}
