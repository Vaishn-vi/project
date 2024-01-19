<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class police extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type'           => 'INT',
                'constraint'     => '20',
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'name' => [
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],

            'emailaddress' => [
                'type'       => 'VARCHAR',
                'constraint' => '30',
            ],

            'password' => [
                
                'type'       => 'VARCHAR',
                'constraint' => '12',
            ],

        ]);
    
            $this->forge->addKey('id', true);
            $this->forge->createtable('police');
        }
    
        public function down()
        {
            $this->forge->droptable('police');
        }
    }