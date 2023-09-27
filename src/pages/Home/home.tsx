import { useContext, useRef, useState } from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import useCep from '../../hooks/useCep';
import { DarkModeContext } from '../../context/darkmode';

export default function HomePage() {
    const cepInputRef = useRef<HTMLInputElement | null>(null);
    const [cep, setCep ] = useState('');
    const { errors, info, getCepInfo } = useCep(cep);

    const { isDarkMode } = useContext(DarkModeContext)!;

    const onCepBlur = async () => {
        await getCepInfo();
        if((errors.cepError || errors.lengthError) && cepInputRef.current != null) {
            cepInputRef.current.focus();
        }
    }

    const renderLengthError = () => {
        if(errors.lengthError)
            return <span className={styles.error}>o CEP precisa ter 8 caracteres.</span>
    }

    const renderCepError = () => {
        if(errors.cepError)
            return <span className={styles.error}>CEP inválido!</span>
    }

    const onCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        errors.resetErrors();
        setCep(e.target.value);
    }

    return (
        <div className={`${styles.container} ${isDarkMode ? styles.thin_darkmode : ''}`}>
            <div className={`${styles.content} ${isDarkMode ? styles.darkmode : ''}`}>
                <h1>Qual seu endereço?</h1>
                <p>digite seu cep:</p>
                <input 
                    type="text" 
                    placeholder='ex: 12345678' 
                    ref={cepInputRef}
                    className={styles.cepinput} 
                    onChange={(e) => onCepChange(e)}
                    onBlur={onCepBlur}
                />
                {renderLengthError()}
                {renderCepError()}
                <div className={styles.inputs}>
                    <input type="text" readOnly placeholder={info.estado}/>
                    <input type="text" readOnly placeholder={info.cidade}/>
                    <input type="text" readOnly placeholder={info.bairro}/>
                    <input type="text" readOnly placeholder={info.rua}/>
                </div>
            </div>
        </div>
    )
}