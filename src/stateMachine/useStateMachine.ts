import { useCallback, useEffect, useState } from "react";

export type Machine<State extends string, Action extends string> = {
    initialState: State,
    initialEffect?: () => void;
    machineEffect?: () => void;
    machineEffectDependencies?: any[];
    statesEffectDependencies?: any[];
    states: {
        [state in State]: {
            effect?: () => void;
            actions: {
                [action in Action]?: {
                    newState: State,
                    onTransition?: ((arg?: any) => void)
                }
            }
        }
    }
}

export const useStateMachine = <State extends string, Action extends string>(machine: Machine<State, Action>): [State, (action: Action, arg?:any) => void] => {

    const [state, setState] = useState(machine.initialState);

    const dispatchAction = useCallback((action: Action, arg?: any) => {
        const Action = machine.states[state].actions[action];
        if (Action) {
            setState(Action.newState);
            Action.onTransition && Action.onTransition(arg);
        }
    },[state])

    useEffect(() => {
        machine.initialEffect && machine.initialEffect();
    },[])

    useEffect(() => {
        machine.machineEffect && machine.machineEffect();
    }, machine.machineEffectDependencies)

    useEffect(()=> {
        const Effect = machine.states[state].effect;
        Effect && Effect();
    }, machine.statesEffectDependencies)

    return [state, dispatchAction];
}
