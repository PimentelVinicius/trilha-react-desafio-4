import styled from 'styled-components';
import React from 'react';

interface ButtonContainerProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #81259D;
    border-radius: 21px;
    cursor: pointer; // Padrão do cursor

    &:hover {
        opacity: 0.6;
    }

    &:disabled {
        background-color: #ccc; /* Cor de fundo quando desabilitado */
        color: #666; /* Cor do texto quando desabilitado */
        cursor: not-allowed; /* Cursor de não permitido */
        opacity: 0.5; /* Opacidade reduzida */
    }
`;

