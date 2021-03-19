import React from "react"
import { CheckboxInput, FormOptionSwitchStyle, FormSwitch, FormSwitchLabel, FormSwitchWrapper, RoundSliderSpan } from "@components/form/generic/formOptionSwitch/formOptionSwitchStyle";

interface FormOptionSwitchProps {
    option1: string;
    option2: string;
    isOptionOne: boolean;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormOptionSwitch: React.FC<FormOptionSwitchProps> = (props) => {
    const { option1, option2, isOptionOne } = props;

    return (
        <FormOptionSwitchStyle>
            <FormSwitchWrapper>
                <FormSwitchLabel>{isOptionOne ? <b>{option1}</b> : option1}</FormSwitchLabel>
                <FormSwitch>
                    <CheckboxInput checked={!isOptionOne} type="checkbox" />
                    <RoundSliderSpan className="slider" />
                </FormSwitch>
                <FormSwitchLabel>{!isOptionOne ? <b>{option2}</b> : option2}</FormSwitchLabel>
            </FormSwitchWrapper>
        </FormOptionSwitchStyle>
    )
}

