<template>
  <section class="main-section">
    <PageHeader title="Users List">
      <ButtonLink
        title="New User"
        routeName="create user"
        :withPlusIcon="true"
      />
    </PageHeader>

    <TableSettings @setPerPage="setPerPage" />

    <MainTable
      @paginationChangePage="getUsers"
      :paginationData="users.list"
      :showingEntries="perPage.number"
      :totalShowingEntries="users.list.total"
      :headNames="['Name', 'Date Created', 'Gender', 'Action']"
    >
      <UserTableRow v-if="!onProgress" @onUserDelete="openModal" />

      <UserTableRowSkeleton v-if="onProgress" />
    </MainTable>

    <ConfirmModal
      @onConfirm="deleteUser(userId)"
      @onClose="useConfirmModal.close()"
    >
      <span>are you sure ?</span>
    </ConfirmModal>
  </section>
</template>

<script setup>
import MainTable from "@/views/components/MainTable/index.vue";
import ConfirmModal from "@/views/components/ConfirmModal/index.vue";
import useConfirmModal from "@/views/components/ConfirmModal/useConfirmModal";
import ButtonLink from "@/views/components/ButtonLink/index.vue";
import TableSettings from "@/views/pages/Users/components/TableSettings.vue";
import PageHeader from "@/views/components/PageHeader/index.vue";
import UserTableRow from "@/views/pages/Users/components/UserTableRow.vue";
import UserTableRowSkeleton from "@/views/pages/Users/components/UserTableRowSkeleton.vue";

import perPage from "@/views/pages/Users/stores/perPage";
import useUsersService from "@/views/pages/Users/services/useUsersService";
import { onMounted, ref } from "vue";
import users from "@/views/pages/Users/stores/users";

const { getUsers, onProgress, setPerPage, deleteUser } = useUsersService();

onMounted(getUsers);
let userId = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  userId.value.id = id;
  userId.value.index = index;
};
</script>
