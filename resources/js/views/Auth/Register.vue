<template>
    <div>
        <section class="section">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                        <div class="login-brand">
                            {{ env.BRAND }}
                        </div>

                        <div class="card card-primary">
                            <div class="card-header"><h4>Register</h4></div>

                            <div class="card-body">
                                <div v-if="!!errorTab.length" class="alert alert-info alert-dismissible show fade">
                                    <div class="alert-body">
                                        <button class="close" data-dismiss="alert" v-on:click="sclose">
                                            <span>×</span>
                                        </button>
                                        <ul v-for="v in errorTab">
                                            <li>{{ v.email }}</li>
                                        </ul>
                                    </div>
                                </div>
                                <form @submit.prevent="submit">
                                    <div class="row">
                                        <div class="form-group col-6">
                                            <label for="email">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                :class="$v.user.email.$error ? 'form-control is-invalid' : 'form-control'"
                                                v-model.trim="$v.user.email.$model"
                                                autofocus
                                                required
                                            >
                                            <div class="invalid-feedback">Email
                                                {{
                                                   $v.user.email.$error ?
                                                   (!$v.user.email.required ? 'is required' : 
                                                    !$v.user.email.email ? 'is invalid' : '' 
                                                   ) :
                                                   ''
                                                }}
                                            </div>
                                        </div>
                                        <div class="form-group col-6">
                                            <label for="pass">Password</label>
                                            <input
                                                id="pass"
                                                type="password"
                                                :class="$v.user.pass.$error ? 'form-control is-invalid' : 'form-control'"
                                                v-model.trim="$v.user.pass.$model"
                                                required
                                            >
                                            <div class="invalid-feedback">Password
                                                {{
                                                   $v.user.pass.$error ?
                                                   (!$v.user.pass.required ? 'is required' :
                                                    !$v.user.pass.minLength ? 'must be at least 6 characters' : ''
                                                   ) :
                                                   ''
                                                }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="form-group col-6">
                                            <label for="nama">Nama</label>
                                            <input
                                                id="nama"
                                                type="text"
                                                :class="$v.user.name.$error ? 'form-control is-invalid' : 'form-control'"
                                                v-model.trim="$v.user.name.$model"
                                                required
                                            >
                                            <div class="invalid-feedback">Nama
                                                {{ $v.user.name.$error ? (!$v.user.name.required ? 'is required' : '') : '' }}
                                            </div>
                                            <div class="invalid-feedback">
                                            </div>
                                        </div>
                                        <div class="form-group col-6">
                                            <label>Jenis Kelamin</label>
                                            <select class="form-control selectric" v-model="user.jenis_kelamin">
                                                <option value="laki-laki">Laki-laki</option>
                                                <option value="perempuan">Perempuan</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="form-group col-6">
                                            <label>Sekolah</label>
                                            <select class="form-control selectric" v-model="user.sekolah_id">
                                                <option v-for="v in npsnCollect" :value="v.npsn">{{ v.nama }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-6">
                                            <label for="jurusan" class="d-block">Jurusan</label>
                                            <input
                                                id="jurusan"
                                                type="text"
                                                :class="$v.user.jurusan.$error ? 'form-control is-invalid' : 'form-control'"
                                                v-model="$v.user.jurusan.$model"
                                                required
                                            >
                                            <div class="invalid-feedback">Jurusan
                                                {{ $v.user.jurusan.$error ? (!$v.user.jurusan.required ? 'is required' : '') : '' }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="nis">NIS</label>
                                        <input
                                            id="nis"
                                            type="number"
                                            :class="$v.user.nis.$error ? 'form-control is-invalid' : 'form-control'"
                                            v-model="$v.user.nis.$model"
                                            required
                                        >
                                        <div class="invalid-feedback">NIS
                                            {{ $v.user.nis.$error ? (!$v.user.nis.required ? 'is required' : '') : '' }}
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" v-model="agree" class="custom-control-input" id="agree" required>
                                            <label class="custom-control-label" for="agree">I agree with the <router-link :to="{ name: 'toc', query: { back: $route.fullPath } }">terms and conditions</router-link></label>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button
                                            type="submit"
                                            class="btn btn-primary btn-lg btn-block"
                                            :disabled="!agree || $v.$invalid || isLoading || !check(user)"
                                        >{{ isLoading ? `wait...` : 'Register' }}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="mt-5 text-muted text-center">
                            Have account? <router-link :to="{ name: 'login' }">Login Here</router-link>
                        </div>
                        <div class="simple-footer">
                            Copyright &copy; {{ env.APP_NAME }} {{ env.DATE_YEARS }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <pre>{{ $v }}</pre>
    </div>
</template>
<script>
</script>
