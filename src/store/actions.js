export const tambah_notif = ({ commit }, notification) => {
    commit('PUSH_NOTIF', notification);
}

export const hapus_notif = ({ commit }, notification) => {
    commit('HAPUS NOTIFIKASI', notification);
}
