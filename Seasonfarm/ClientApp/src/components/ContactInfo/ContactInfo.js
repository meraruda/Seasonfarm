import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@material-ui/core/Tooltip';
import './ContactInfo.less';

export class ContactInfo extends React.PureComponent {

    state = {
        open: false
    }

    onInfoCopy = () => {
        this.setState({
            open: true
        }, () => setTimeout(() => this.setState({ open: false }), 1000))
    }

    render() {
        const { children, text } = this.props;
        return (<div className="single-contact-info d-flex align-items-center">
            <CopyToClipboard text={text} onCopy={this.onInfoCopy}>
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    open={this.state.open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Copied."
                >
                    {children}
                </Tooltip>
            </CopyToClipboard>
        </div>);
    }
}