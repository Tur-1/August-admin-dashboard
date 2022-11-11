<template>
    <nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar="init">
        <div class="simplebar-wrapper">
            <div class="simplebar-height-auto-observer-wrapper">
                <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask">
                <div class="simplebar-offset">
                    <div class="simplebar-content-wrapper">
                        <div class="simplebar-content">
                            <div class="sidebar-inner px-4 pt-3">
                                <div
                                    class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar-lg me-4">
                                            <img src="/src/assets/img/team/profile-picture-3.jpg"
                                                class="card-img-top rounded-circle border-white" alt="Bonnie Green" />
                                        </div>
                                        <div class="d-block">
                                            <h2 class="h5 mb-3">Hi, Jane</h2>
                                            <a href="/src/pages/examples/sign-in.html"
                                                class="btn btn-secondary btn-sm d-inline-flex align-items-center"><svg
                                                    class="icon icon-xxs me-1" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                                    </path>
                                                </svg>
                                                Sign Out</a>
                                        </div>
                                    </div>
                                    <div class="collapse-close d-md-none">
                                        <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                                            aria-controls="sidebarMenu" aria-expanded="true"
                                            aria-label="Toggle navigation"><svg class="icon icon-xs" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg></a>
                                    </div>
                                </div>
                                <ul class="nav flex-column pt-3 pt-md-0">
                                    <li class="nav-item">
                                        <a href="/src/index.html" class="nav-link d-flex align-items-center"><span
                                                class="sidebar-icon"><img src="/src/assets/img/brand/light.svg"
                                                    height="20" width="20" alt="Volt Logo" /></span><span
                                                class="mt-1 ms-1 sidebar-text">Volt Overview
                                            </span>
                                        </a>
                                    </li>
                                    <SidebarLink toRoute="dashboard" title="Dashboard"
                                        :activeRouteNames="['dashboard']">
                                        <span class="sidebar-icon">
                                            <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                            </svg>
                                        </span>
                                    </SidebarLink>
                                    <SidebarLink toRoute="users" title="Users"
                                        :activeRouteNames="['create user', 'update user', 'users']">
                                        <span class="sidebar-icon"><svg class="icon icon-xs me-2" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
                                                </path>
                                            </svg>
                                        </span>
                                    </SidebarLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import SidebarLink from "./SidebarLink.vue";

const route = useRoute();
</script>
