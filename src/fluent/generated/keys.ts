import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c1a90586754942fea74c5094fffdbbc1'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '22b061d595e94230b9ae635bf812843b'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'f5b93756095243ce9585f93b749d88db'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: 'f99104795d774b039e8e5b97199625cf'
                        deleted: false
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: 'b0cae5ebde0c443a953d7e92a80f5af1'
                        deleted: false
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4103f21b6b0641ccbaf6ae585e8bea4a'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '2d84a12f5a4540f7a9f1e91048ac70c3'
                    }
                }
            }
        }
    }
}
