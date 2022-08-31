# Kaholo JSON Plugin
This plugin parses JSON documents from files on the disk. This serves two purposes - one is to validate that the file is valid JSON, otherwise an error will occur. The other is to provide the JSON document in Final Result for downstream actions. This is useful in the pipeline to access the data using `kaholo.actions.json1.result`, where `json1` is the ID of the JSON Plugin action parsing the file. Individual items within the file may also be selected, e.g. `kaholo.actions.json1.result.tests[0].status`.

If the output of an earlier action is already JSON it can be accessed directory from the Final Result of that action. For example after creating a new instance with the AWS EC2 Plugin, its IP address may be accessed using, `kaholo.actions.amazonec1.result.Instances[0].PrivateIpAddress`. The JSON Plugin is not needed for this.

## Prerequisites
A file on the disk must be available for parsing, one in valid JSON format if the Action is to succeed.

## Plugin Installation
For download, installation, upgrade, downgrade and troubleshooting of plugins in general, see [INSTALL.md](./INSTALL.md).

## Method: Parse JSON File

### Parameters
File Path - the relative or absolute path to the file on the Kaholo Agent to parse. Relative paths must be based on the default working directory on the agent, for example `/twiddlebug/workspace`. Use Command Line plugin to run command `pwd` with empty Working Directory parameter to determine the default working directory on your agent.