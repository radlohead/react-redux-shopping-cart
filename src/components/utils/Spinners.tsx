import React from 'react';
import { ClipLoader } from 'react-spinners';

interface ISpinnersProps {
    loading: boolean;
}

class Spinners extends React.PureComponent<ISpinnersProps> {
    public render(): JSX.Element {
        const { loading } = this.props;

        return (
            <ClipLoader
                sizeUnit={'px'}
                size={30}
                color={'#123abc'}
                loading={loading}
            />
        );
    }
}

export default Spinners;
