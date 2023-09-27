import { useContext } from 'react';
import styles from './styles.module.scss';
import { DarkModeContext } from '../../context/darkmode';

export default function AboutPage() {
    const { isDarkMode } = useContext(DarkModeContext)!;
    return (
        <section className={`${styles.container} ${isDarkMode ? styles.thin_darkmode : ''}`}>
            <div className={`${styles.content} ${isDarkMode ? styles.darkmode : ''}`}>
                <h1>Sobre a CEP Fácil</h1>
                <div className={styles.text}>
                    <p>A CEP Fácil é uma plataforma online que oferece uma solução conveniente e eficaz para a busca de informações relacionadas a CEPs (Códigos de Endereçamento Postal) no Brasil.</p> <p>Nosso site simplifica o processo de encontrar detalhes específicos de endereços, fornecendo aos usuários dados como nome da rua, bairro, cidade e estado a partir do simples fornecimento do CEP desejado.</p>
                    <p>Com um design intuitivo e fácil de usar, o CEP Fácil torna a obtenção de informações de endereço rápida e descomplicada. Seja para enviar correspondências, fazer entregas ou apenas para obter conhecimento sobre uma área geográfica, nossa plataforma é uma ferramenta confiável para atender às suas necessidades de localização.</p>
                    <p>Estamos comprometidos em fornecer acesso rápido e preciso a dados de CEP, tornando a vida mais simples para pessoas e empresas que dependem dessas informações no dia a dia. Conte conosco para simplificar suas buscas de endereço, e estamos constantemente aprimorando nossa plataforma para garantir que suas necessidades sejam atendidas da melhor forma possível.</p>
                </div>
            </div>
            <div className={styles.logo}></div>
        </section>
    )
}