# Obsidian Fabric Plugin

## Obsidian Fabric is a plugin for [obsidian.md](https://obsidian.md) which supercharges Obsidian with [Daniel Miessler's](https://github.com/danielmiesser) [Fabric](https://github.com/danielmiessler/fabric) AI solution.

## Details

- STATUS: NON-FUNCTIONAL
- LICENSE: [LICENSE.txt](./LICENSE.txt)

## Attribution

All praise and credit for the functionality and features included in this plugin should be directed towards [Daniel Miessler](https://github.com/danielmiessler) and the people that have contributed to his brain child, [Fabric](https://github.com/danielmiessler/fabric). This is because the "heavy lifting" to bring this functionality to Obsidian was done by Daniel Miessler and the folks that have contributed to Fabric. This plugin is just integrate the functionality that was already possible with fabric into Obsidian.


I recommend checking out Daniel Miessler's blog [danielmiessler.com](https://danielmiessler.com) and the Unsupervised Learning podcast and newsletter.

## Disclosures

*The below **disclosures** are included for compliance with Obsidian's [developer policies](https://docs.obsidian.md/Developer+policies)*

### Network Use
- This plugin requires the API server that is included with [Fabric](https://github.com/danielmiessler/fabric) to be installed, configured, and running. This is the API server that is specified in the "Fabric API Server" field in the settings for this Obsidian plugin.
- This plugin will query the Fabric API server that is specified in the plugin settings which will cause the external fabric API server to communicate the **[OpenAI](https://openai.com/product) API**.

### External Software
- This plugin requires external software ([Fabric](https://github.com/danielmiessler/fabric)) to be installed, configured, and running.
- This plugin leverages the OpenAI API indirectly through Fabric.

### External Registration Requirements
- This plugin requires an OpenAI API key to be configured in the plugins settings.
