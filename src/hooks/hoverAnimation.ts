// hooks/useHoverAnimacion.ts
import { useEffect } from 'react';

const useHoverAnimacion = (id: string) => {
  useEffect(() => {
    const element = document.getElementById(id);

    if (element) {
      element.addEventListener('mouseenter', () => {
        element.classList.add('hover');
      });

      element.addEventListener('mouseleave', () => {
        element.classList.remove('hover');
      });

      return () => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      };
    }
  }, [id]);
};

export default useHoverAnimacion;
