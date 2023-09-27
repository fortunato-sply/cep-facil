import axios from "axios";
import { useState } from "react";

export default function useCep(cep: String) {
    const [cepError, setCepError] = useState(false);
    const [lengthError, setLengthError] = useState(false);

    const [info, setInfo] = useState({
        estado: 'Estado',
        bairro: 'Bairro',
        cidade: 'Cidade',
        rua: 'Rua'
    });

    const resetErrors = () => {
        setLengthError(false);
        setCepError(false);
    }

    const getCepInfo = async () => {
        if(cep.length != 8) {
            setLengthError(true);
            return;
        }

        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        console.log(data);
        if(data.erro) {
            setCepError(true);
            return;
        }

        const newInfo = {
            estado: data.uf,
            bairro: data.bairro,
            cidade: data.localidade,
            rua: data.logradouro
        }

        setInfo(newInfo);
    }

    return { errors: { cepError, lengthError, resetErrors }, info, getCepInfo }
}