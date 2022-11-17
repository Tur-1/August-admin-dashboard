<template>
  <section class="main-section">
    <PageHeader title="Users List">
      <ButtonLink
        title="New User"
        routeName="usersCreate"
        :withPlusIcon="true"
      />
    </PageHeader>

    <!-- <TableSettings @setPerPage="setPerPage" /> -->
    <MainTableSettings
      :showingEntries="showingEntries"
      @setPerPage="setPerPage"
    />

    <MainTable
      @onChangePage="getAllUsers"
      :paginationLinks="usersStore.pagination.links"
      :showingEntries="showingEntries.activeEntrie"
      :totalShowingEntries="usersStore.pagination.total"
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
import { onMounted, ref } from "vue";
import MainTable from "@/components/MainTable/index.vue";
import ConfirmModal from "@/components/ConfirmModal/index.vue";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import UserTableRow from "@/modules/Users/components/UserTableRow.vue";
import UserTableRowSkeleton from "@/modules/Users/components/UserTableRowSkeleton.vue";
import useUsersService from "@/modules/Users/services/useUsersService";
import usersStore from "@/modules/Users/stores/usersStore";
import onProgress from "@/modules/Users/stores/onProgress";
import showingEntries from "@/modules/Users/stores/showingEntries";

import MainTableSettings from "@/components/MainTable/MainTableSettings.vue";

const { getAllUsers, setPerPage, deleteUser } = useUsersService();

onMounted(getAllUsers);
let userId = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  userId.value.id = id;
  userId.value.index = index;
};
</script>
