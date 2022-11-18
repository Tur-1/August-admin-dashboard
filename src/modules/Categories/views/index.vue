<script setup>
import { ref, watch, onMounted } from "vue";
import MainTable from "@/components/MainTable/index.vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import UserTableRow from "@/modules/Users/components/UserTableRow.vue";
import UserTableRowSkeleton from "@/modules/Users/components/UserTableRowSkeleton.vue";
import useUsersService from "@/modules/Users/services/useUsersService";
import usersStore from "@/modules/Users/stores/usersStore";
import onProgress from "@/modules/Users/stores/onProgress";
import entries from "@/components/MainTable/entries";
import MainTableSettings from "@/components/MainTable/MainTableSettings.vue";

const { getAllUsers, setShowingEntries } = useUsersService();

onMounted(getAllUsers);

let search = ref("");
watch(search, (value) => {
  usersStore.value.filtered = usersStore.value.list.data.filter((user) => {
    return user.name.toLowerCase().includes(value.toLowerCase());
  });
});
</script>
<template>
  <section class="main-section">
    <PageHeader title="Users List">
      <ButtonLink title="New User" routeName="usersCreate">
        <i class="fa-solid fa-plus" />
      </ButtonLink>
    </PageHeader>

    <MainTableSettings
      :entries="entries.data"
      :activeEntrie="entries.activeEntrie"
      @setShowingEntries="setShowingEntries"
      inputPlaceholder="search users"
      v-model="search"
    />

    <MainTable
      :headTitles="['Name', 'Date Created', 'Gender', 'Role', 'Action']"
      @onChangePage="getAllUsers"
      :paginationLinks="usersStore.pagination.links"
      :entries="entries.activeEntrie"
      :totalEntries="usersStore.pagination.total"
      :onNoRecordsFound="usersStore.filtered.length == 0"
      recordsTitle="No Users Found"
    >
      <UserTableRow v-if="!onProgress.index" />

      <UserTableRowSkeleton v-if="onProgress.index" />
    </MainTable>
  </section>
</template>
