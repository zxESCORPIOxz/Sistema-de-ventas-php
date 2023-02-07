<?php
    class UsuariosModel extends Query{
        public function __construct() {
            parent::__construct();
        }

        public function getUsuario(string $usuario, string $clave){
            $sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND clave='$clave'";
            $data = $this->select($sql);
            return $data;
        }

        public function getUsuarios(){
            $sql = "SELECT usuarios.*, caja.caja FROM usuarios INNER JOIN caja where usuarios.id_caja = caja.id";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function getCajas(){
            $sql = "SELECT * FROM caja WHERE estado = 1";
            $data = $this->selectAll($sql);
            return $data;
        }
    }
?>