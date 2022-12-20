<script setup>
import { ref, watch } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import UserTableRow from "@/modules/Users/components/UserTableRow.vue";
import UserTableRowSkeleton from "@/modules/Users/components/UserTableRowSkeleton.vue";
import useUsersService from "@/modules/Users/services/useUsersService";
import UsersStore from "@/modules/Users/stores/UsersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable, TableSettings } from "@/components/MainTable";

const { deleteUser, setShowingEntries, getAllUsers } = useUsersService();

let search = ref("");
watch(search, (value) => {
  getAllUsers({ search: value });
});

let fields = ["Name", "email", "Gender", "Role", "Action"];

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
      @onChangeEntries="setShowingEntries"
      inputPlaceholder="search users"
      v-model="search"
      :activeEntries="UsersStore.pagination.per_page"
    />

    <MainTable
      :fields="fields"
      @onChangePage="getAllUsers"
      @onDelete="deleteUser(user)"
      :pagination-links="UsersStore.pagination.links"
      :results="UsersStore.pagination.per_page"
      :total-results="UsersStore.pagination.total"
      no-records-found-title="No Users Found"
      :showNoRecordsFound="UsersStore.filtered.length == 0"
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
