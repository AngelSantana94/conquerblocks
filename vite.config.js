import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/conquerblocks/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        error404: resolve(__dirname, "404.html"),
        blog: resolve(__dirname, "blog.html"),
        about: resolve(__dirname, "quienes_somos.html"),
        desarrollo_blockchain: resolve(__dirname, "blog/desarrollo_blockchain.html"),
        desarrollo_perfilesjunior: resolve(__dirname, "blog/desarrollo_full-stack_para_perfiles_junior.html"),
        desarrollo_marketer: resolve(__dirname, "blog/el_desarrollador_full_stack_marketer.html"),
        inteligencia_artificial_blog: resolve(__dirname, "blog/inteligencia_artificial.html"),
        master_ciberseguridad: resolve(__dirname, "cursos/master_en_ciberseguridad.html"),
        inteligencia_artificial_curso: resolve(__dirname, "cursos/master_en_desarrollo _de_inteligencia_artificial.html"),
        master_fullstack: resolve(__dirname, "cursos/master_en_desarrollo _web_full-stack.html"),
        master_blockchain: resolve(__dirname, "cursos/master_en_desarrollo_blockchain.html"),
        politica_cookies: resolve(__dirname, "legal/politica-cookies.html"),
        politica_privacidad: resolve(__dirname, "legal/politica-privacidad.html"),
        terminos_condiciones: resolve(__dirname, "legal/terminos-condiciones.html"),
      },
    },
  },
});
