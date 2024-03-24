import { ComponentPropsWithRef } from 'react';

export const BaseButton = (props: ComponentPropsWithRef<'button'>) => {
    let { type, ...remaining } = props;
    type = type ?? 'button';

    return <button type={type} {...remaining} />;
};
