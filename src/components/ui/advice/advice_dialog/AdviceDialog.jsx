import React from 'react';
import styles from './AdviceDialog.module.scss';
import AdviceForm from './../advice_form/AdviceForm';

const AdviceDialog = ({ isShow, showCallback }) => {

    return (
        <div className={
            isShow ?
                styles.AdviceDialog :
                [styles.AdviceDialog, styles.AdviceDialog_Hide].join(' ')
        }
            onClick={() => showCallback(!isShow)}>
            <div className={styles.AdviceDialog__Content}
                onClick={e => e.stopPropagation()}>
                <AdviceForm />
            </div>
        </div>
    );
}

export default AdviceDialog;