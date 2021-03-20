

import React from "react";
import { LinkWithIconA, LinkWithIconStyle, UrlIcon } from "@components/generic/linkWithIcon/linkWithIconStyle";

interface LinkWithIconProps {
    iconUrl: string;
    text: string;
    url: string;
}

export const LinkWithIcon: React.FC<LinkWithIconProps> = (props) => {
    const { text, iconUrl, url } = props;

    return (
        <LinkWithIconStyle>
            <LinkWithIconA href={url} target="_blank" rel="noopener noreferrer nofollow">{text}</LinkWithIconA>
            <UrlIcon src={iconUrl} />
        </LinkWithIconStyle>
    )
}