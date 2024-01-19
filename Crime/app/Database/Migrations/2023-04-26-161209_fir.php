<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class fir extends Migration
{
    public function up() {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 20,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'username' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            'location' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            'date' => [
                'type' => 'varchar,',
                'constraint' => '100',
            ],
            'time' => [
                'type' => 'varchar',
                'constraint' => '100',
            ],
            'crime' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            


        ]);
    
            $this->forge->createtable('fir');
        
        }
    
        public function down()
        {
            $this->forge->droptable('fir');
        }
    }