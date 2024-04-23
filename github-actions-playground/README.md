# Github Actions from Zero to Hero

## Basics

### Basic workflows structure

A Gtihub workflows (or pipeline) has a basic structure

```yml

# Event section: Here you tell GitHub which actions will trigger this workflow

name: My example workflow
on:
  push: [ main ]

# Jobs definition: Here you define the sequence of jobs that will run in this workflow.

jobs:
  job1:
    # Logic for job 1
  job2:
    # Logic for job 2
```
In the following [link](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows) you can find  a list of the events you can use and their default values.

### Basic job structure

The structure of a job is basically the next one:

```yml
# ...

# jobs:
    job1:
      name: Name of the Job
      runs-on: ubuntu-latest
      steps: # A list of different commands you want to run in this job
        - name: Step 1
          run: echo "Step 1"
        - name: Step 2
          run: echo "Step 2"
```

You can find all the available properties in the following [link](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobs).

Each job runs on an independent runner, and it can depend on the completition of previous jobs or even run in parallel.

## Modularization

## Using an existing action

Sometimes, there may be already an action created that already does what you need, so you can use it intead of defining the step  by yourself.

```yml

# ...

# jobs:
    # job1:
        # ...
        steps: 
          - name: Checkout the project
            uses: actions/checkout@v4 # we use the keyworkd 'uses' for using an existing action
```

As you can see, the `uses` keyword is placed in one of the steps. 

Some popular Github Action created by the community are available in the [marketplace](https://github.com/marketplace?category=&copilot_app=false&query=&type=actions&verification=).

## Using an existing workflow

We can also use an existing workflow. However, this will be placed in a job, NOT in a step (in comparisson to the actions).

This is mainly used by each developer when they want to modularize their pipelines.

```yml

# ...

# jobs:
    # job1:
        name: My Job 1
        uses: <organization>/<repository>/<yml_file_path>@<version>
```

## Creating custom action

There are three ways of creating a custom action: https://docs.github.com/en/actions/creating-actions

### Composite (YAML)

```yml
name: 'Sample action'
inputs:
  node-version:
    required: true
    default: 'World'

runs:
  using: 'composite'
  steps:
    - name: Setup Node
```

Notes:

- We need to enable permissions for the actions to be called in the Repository settings.
- Action should be called `action.yml` and should be located in `.github/actions` directory. The `action.yml` file can be inside another additional folder if desired.

### Javascript

TBD

### Docker

TBD

## Creating reusable workflows

Creating a reusable workflow is pretty straightforward: https://docs.github.com/en/actions/using-workflows/reusing-workflows

## More Examples

[Here](./presentation/)