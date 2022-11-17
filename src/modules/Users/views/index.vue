<template>
  <section class="main-section">
    <PageHeader title="Users List">
      <ButtonLink
        title="New User"
        routeName="usersCreate"
        :withPlusIcon="true"
      />
    </PageHeader>

    <TableSettings @setPerPage="setPerPage" />

    <MainTable
      @onChangePage="getUsers"
      :paginationLinks="users.pagination.links"
      :showingEntries="perPage.number"
      :totalShowingEntries="users.filtered.length"
      :headTitles="['Name', 'Date Created', 'Gender', 'Action']"
    >
      <UserTableRow v-if="!onProgress.index" @onUserDelete="openModal" />

      <UserTableRowSkeleton v-if="onProgress.index" />
    </MainTable>

    <ConfirmModal
      :onProgress="onProgress.destroy"
      @onConfirm="deleteUser(userId)"
      @onClose="useConfirmModal.close()"
    >
      <span>are you sure ?</span>
    </ConfirmModal>
  </section>
</template>

<script setup>
import MainTable from "@/components/MainTable/index.vue";
import ConfirmModal from "@/components/ConfirmModal/index.vue";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import ButtonLink from "@/components/ButtonLink/index.vue";
import TableSettings from "@/modules/Users/components/TableSettings.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import UserTableRow from "@/modules/Users/components/UserTableRow.vue";
import UserTableRowSkeleton from "@/modules/Users/components/UserTableRowSkeleton.vue";
import perPage from "@/modules/Users/stores/perPage";
import useUsersService from "@/modules/Users/services/useUsersService";
import { onMounted, ref } from "vue";
import users from "@/modules/Users/stores/users";

const { getUsers, onProgress, setPerPage, deleteUser } = useUsersService();

onMounted(getUsers);
let userId = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  userId.value.id = id;
  userId.value.index = index;
};
</script>
