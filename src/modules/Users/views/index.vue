<script setup>
import { ref, watch, onMounted } from "vue";
import MainTable from "@/components/MainTable/index.vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import UserTableRow from "@/modules/Users/components/UserTableRow.vue";
import UserTableRowSkeleton from "@/modules/Users/components/UserTableRowSkeleton.vue";
import useUsersService from "@/modules/Users/services/useUsersService";
import usersStore from "@/modules/Users/stores/usersStore";
import UsersOnProgress from "@/modules/Users/stores/UsersOnProgress";
import UsersTableEntries from "@/modules/Users/stores/UsersTableEntries";
import MainTableSettings from "@/components/MainTable/TableSettings.vue";

const { getAllUsers, setShowingEntries, searchUsers } = useUsersService();

onMounted(getAllUsers);

let search = ref("");
watch(search, (value) => {
  searchUsers(value);
});

let fields = ["Name", "email", "Date Created", "Gender", "Role", "Action"];
</script>
<template>
  <section class="main-section">
    <PageHeader title="Users List">
      <ButtonLink title="New User" routeName="usersCreate" />
    </PageHeader>

    <MainTableSettings
      @setShowingEntries="setShowingEntries"
      inputPlaceholder="search users"
      v-model="search"
      :entries="UsersTableEntries"
    />

    <MainTable
      :fields="fields"
      @onChangePage="getAllUsers"
      :paginationLinks="usersStore.pagination.links"
      :entries="UsersTableEntries.activeEntrie"
      :totalEntries="usersStore.pagination.total"
      :showNoRecordsFound="
        usersStore.filtered.length == 0 && !UsersOnProgress.index
      "
      noRecordsFoundTitle="No Users Found"
    >
      <UserTableRow v-if="!UsersOnProgress.index" />

      <UserTableRowSkeleton v-if="UsersOnProgress.index" />
    </MainTable>
  </section>
</template>
