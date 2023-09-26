<script setup>
  import { useQuery }  from "vue-query"
  import { getInstitucion } from "../../api/institucionAPI"

  function useInstitucionQuery(){
    return useQuery("todos", getInstitucion)
  }
  const { isLoading, isError, data: institucion, error } = useInstitucionQuery();

  const handleDropdown = (e) => {
      getSiblings(e.target.parentElement)
        .filter((item) => item.classList.contains("show"))
        .map((item) => {
          item.classList.remove("show");
          if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
          }
          if (item.childNodes[2]) {
            item.childNodes[2].classList.remove("show");
          }
        });
      e.target.setAttribute("aria-expanded", true);
      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    }
    const handleMobileDropdown = (e) => {
      document
        .getElementById("navbarSupportedContent")
        .classList.toggle("show-with-trans");
    }

</script>

<template>
  <nav
    :ref="nr"
    class="navbar navbar-expand-lg change"
    :class="theme === 'light' ? 'light' : ''"
    v-if="!isLoading"
  >
    <div class="container">
      <router-link to="/" class="logo">
        <img
          ref="lr"
          :src="import.meta.env.VITE_APP_ROOT_API + '/InstitucionUpea/' + institucion.institucion_logo"
          v-if="theme === 'light'"
          alt="logo"
        />
        <img
          ref="lr"
          :src="import.meta.env.VITE_APP_ROOT_API + '/InstitucionUpea/' + institucion.institucion_logo"
          v-else-if="theme === 'themeD'"
          alt="logo"
        />
        <img
          ref="lr"
          :src="import.meta.env.VITE_APP_ROOT_API + '/InstitucionUpea/' + institucion.institucion_logo"
          v-else
          alt="logo"
        />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        @click="handleMobileDropdown"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"> Inicio </router-link>
          </li>
          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Nosotros
            </span>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/about/about-light">
                Mision y Vision
              </router-link>
              <router-link class="dropdown-item" to="/contact/contact-light">
                Contacto
              </router-link>
            </div>
          </li>
          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Convocatorias y Cursos
            </span>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/convocatorias/convocatorias">
                Convocatorias
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/comunicados">
                Comunicados
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/avisos">
                Avisos
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/cursos">
                Cursos
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/seminarios">
                Seminarios
              </router-link>
            </div>
          </li>
          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Academia
            </span>
            <div class="dropdown-menu">
              <router-link
                class="dropdown-item"
                to="/institucion/calendarioacademico"
              >
                Calendario Academico
              </router-link>
              <router-link class="dropdown-item" to="/institucion/horarios">
                Horarios
              </router-link>
              <router-link class="dropdown-item" to="/institucion/plandeestudios">
                Plan de Estudio
              </router-link>
              <router-link
                class="dropdown-item"
                to="/institucion/reglamentomodgraduacion"
              >
                Reglamento Mod. Graduacion
              </router-link>
            </div>
          </li>
          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Institucion
            </span>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/institucion/convenios">
                Convenios Institucionales
              </router-link>
              <router-link class="dropdown-item" to="/institucion/pasantias">
                Pasantias
              </router-link>
              <router-link
                class="dropdown-item"
                to="/institucion/trabajosdirigidos"
              >
                Trabajos Dirigidos
              </router-link>
              <router-link
                class="dropdown-item"
                to="/institucion/institutodeinvestigacion"
              >
                Instituto de Investigacion.
              </router-link>
            </div>
          </li>
          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Mas
            </span>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/convocatorias/servicios">
                Servicios
              </router-link>
              <router-link
                class="dropdown-item"
                to="/convocatorias/ofertasacademicas"
              >
                Ofertas Academicas
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/publicaciones">
                Publicaciones
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/gacetas">
                Gacetas
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/eventos">
                Eventos
              </router-link>
              <router-link class="dropdown-item" to="/convocatorias/videos">
                Videos
              </router-link>
            </div>
          </li>
          <!-- <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
            v-if="
              Object.keys(carrera_links.filter((e) => e.ei_tipo == 'KARDEX'))
                .length != 0
            "
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Virtual
            </span>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                target="_blank"
                :href="link.ei_link"
                v-for="(link, id_link) in carrera_links.filter(
                  (e) => e.ei_tipo == 'KARDEX'
                )"
                :key="id_link"
              >
                {{ link.ei_nombre }}
              </a>
            </div>
          </li>
          <li
            class="nav-item dropdown"
            @mouseover="handleDropdown"
            @mouseout="handleDropdown"
            v-if="
              Object.keys(
                carrera_links.filter((e) => e.ei_tipo == 'BIBLIOTECA')
              ).length != 0
            "
          >
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Biblioteca
            </span>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                target="_blank"
                :href="link.ei_link"
                v-for="(link, id_link) in carrera_links.filter(
                  (e) => e.ei_tipo == 'BIBLIOTECA'
                )"
                :key="id_link"
              >
                {{ link.ei_nombre }}
              </a>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>