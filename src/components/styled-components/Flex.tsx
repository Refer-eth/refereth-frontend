import styled from 'styled-components';

export const FlexCenter = styled.div<{ gap?: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${props => props.gap || '0px'};
`;
