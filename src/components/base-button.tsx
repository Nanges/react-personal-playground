import { ComponentPropsWithoutRef } from 'react';

export const BaseButton = (props: ComponentPropsWithoutRef<'button'>) => {
    let { type, ...remaining } = props;
    type = type ?? 'button';

    return <button type={type} {...remaining} />;
};
