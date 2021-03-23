import React from "react"
import { CheckboxInput, OptionSwitchStyle, Switch, SwitchLabel, SwitchWrapper, RoundSliderSpan } from "@components/generic/optionSwitch/optionSwitchStyle";

interface OptionSwitchProps {
    option1: string;
    option2: string;
    isOptionOne: boolean;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OptionSwitch: React.FC<OptionSwitchProps> = (props) => {
    const { option1, option2, isOptionOne, handler } = props;

    return (
        <OptionSwitchStyle>
            <SwitchWrapper>
                <SwitchLabel>{isOptionOne ? <b>{option1}</b> : option1}</SwitchLabel>
                <Switch>
                    <CheckboxInput type="checkbox" checked={!isOptionOne} onChange={handler} />
                    <RoundSliderSpan className="slider" />
                </Switch>
                <SwitchLabel>{!isOptionOne ? <b>{option2}</b> : option2}</SwitchLabel>
            </SwitchWrapper>
        </OptionSwitchStyle>
    )
}

