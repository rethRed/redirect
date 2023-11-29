



type Commands = {
    id: string,
    command: string,
    type: "APPROVED" | "REFUNDED"
    context: "CREATED" | "TO_BE_CREATED"
}


class CommandsDraft  {
    
    initialCommandsState: Commands[];
    currentCommandsState: Commands[];
    constructor( commands: Commands[] ) {
        this.initialCommandsState = commands;
        this.currentCommandsState = commands;
    }

    addCommand(command: Commands): void {
        this.currentCommandsState.push({
            ...command,
            context: "TO_BE_CREATED"
        });
    }

    getCommandsCurrentState(): Commands[] {
        return this.currentCommandsState;
    }

    getDeletedCommands(): Commands[] {
        return this.initialCommandsState.filter((command) => {
            return !this.currentCommandsState.includes(command);
        });
    }

    getAddedCommands(): Commands[] {
        return this.currentCommandsState.filter((command) => {
            return command.context === "TO_BE_CREATED";
        });
    }

    getUpdatedCommands(): Commands[] {
        return this.currentCommandsState.filter((command) => {
            return this.initialCommandsState.includes(command);
        });
    }

    findCommandById(id: string): Commands | undefined {
        return this.currentCommandsState.find((command) => {
            return command.id === id;
        });
    }

    makeCurrentStateInitial(): void {
        this.initialCommandsState = this.currentCommandsState;
    }


    persistCommandsUpdate(command: Commands[]): void {
        const addedCommands = this.getAddedCommands();
        const deletedCommands = this.getDeletedCommands();
        const updatedCommands = this.getUpdatedCommands();

        if(addedCommands.length > 0) {
            // add commands
            // update context to CREATED

        }

        if(deletedCommands.length > 0) {
            // delete commands  
            // remove from current state
        }

        if(updatedCommands.length > 0) {
            // update commands
        }

        this.makeCurrentStateInitial()
    }

    toApiFormat(): Omit<Commands, "context">[] {
        return this.currentCommandsState.map((command) => {
            return {
                id: command.id,
                command: command.command,
                type: command.type
            }
        });
    }

}

