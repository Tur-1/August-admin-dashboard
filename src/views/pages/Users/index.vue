<template>
    <section class="main-section">

        <UsersHeader />
        <TableSettings />
        <div class="card card-body shadow border-0 table-wrapper table-responsive">
            <table class="table user-table table-hover align-items-center">
                <thead>
                    <tr>
                        <th class="border-bottom">
                            <div class="form-check dashboard-check">
                                <input class="form-check-input" type="checkbox" id="userCheck55" value="">
                                <label class="form-check-label" for="userCheck55">
                                </label>
                            </div>
                        </th>
                        <th class="border-bottom">Name</th>
                        <th class="border-bottom">Date Created</th>
                        <th class="border-bottom">Action</th>
                    </tr>
                </thead>
                <tbody>

                    <Suspense>
                        <template #default>
                            <UserTableRow />
                        </template>

                        <template #fallback>
                            <UserTableRowSkeleton />
                        </template>
                    </Suspense>
                </tbody>
            </table>
            <UsersTableFooter />
        </div>
    </section>
</template>

<script setup>

import TableSettings from '@/views/pages/Users/components/TableSettings.vue';
import UsersHeader from '@/views/pages/Users/components/UsersHeader.vue';
import UsersTableFooter from '@/views/pages/Users/components/UsersTableFooter.vue';
import UserTableRow from '@/views/pages/Users/components/UserTableRow.vue';
import UserTableRowSkeleton from '@/views/pages/Users/components/UserTableRowSkeleton.vue';



</script>

 