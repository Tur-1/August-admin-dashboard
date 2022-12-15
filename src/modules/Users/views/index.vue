<script setup>
import { ref, watch } from "vue";

import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import UserTableRow from "@/modules/Users/components/UserTableRow.vue";
import UserTableRowSkeleton from "@/modules/Users/components/UserTableRowSkeleton.vue";
import useUsersService from "@/modules/Users/services/useUsersService";
import usersStore from "@/modules/Users/stores/usersStore";
import UsersTableEntries from "@/modules/Users/stores/UsersTableEntries";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable, TableSettings } from "@/components/MainTable";

const { deleteUser, setShowingEntries, searchUsers, getAllUsers } =
  useUsersService();

let search = ref("");
watch(search, (value) => {
  searchUsers(value);
});

let fields = ["Name", "email", "Date Created", "Gender", "Role", "Action"];

let user = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  user.value.id = id;
  user.value.index = index;
};
</script>
<template>
  <section class="main-section">
    <PageHeader title="Users List">
      <ButtonLink title="New User" routeName="usersCreate" />
    </PageHeader>

    <TableSettings
      @setShowingEntries="setShowingEntries"
      inputPlaceholder="search users"
      v-model="search"
      :entries="UsersTableEntries"
    />

    <MainTable
      :fields="fields"
      @onChangePage="getAllUsers"
      @onDelete="deleteUser(user)"
      :pagination-links="usersStore.pagination.links"
      :results="usersStore.pagination.per_page"
      :total-results="usersStore.pagination.total"
      no-records-found-title="No Users Found"
      :showNoRecordsFound="usersStore.filtered.length == 0"
    >
      <Suspense>
        <UserTableRow @onDelete="openModal" />

        <template #fallback>
          <UserTableRowSkeleton />
        </template>
      </Suspense>
    </MainTable>
  </section>
</template>
