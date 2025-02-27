// hooks/useTextoAnimado.ts
import { useEffect } from 'react';

const useTextoAnimado = (id: string) => {
  useEffect(() => {
    const texto = document.getElementById(id) as HTMLElement;

    if (texto) {
      setTimeout(() => {
        texto.classList.add('aparecer');
      }, 100);
    }
  }, [id]);
};

export default useTextoAnimado;
